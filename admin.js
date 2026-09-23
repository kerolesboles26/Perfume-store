import { getFirestore, collection, getDocs, doc, setDoc } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";

function showAdminNotification(message, type = "success") {
    const existing = document.querySelector(".admin-toast");
    if (existing) existing.remove();

    const toast = document.createElement("div");
    toast.className = `admin-toast ${type}`;
    toast.style.cssText = `
        position: fixed;
        top: 24px;
        right: 24px;
        padding: 14px 22px;
        background: #18140c;
        border: 1px solid ${type === "error" ? "#ff4d4d" : "#c9a227"};
        color: #fff;
        border-radius: 10px;
        font-family: inherit;
        font-size: 14px;
        font-weight: 600;
        box-shadow: 0 10px 25px rgba(0,0,0,0.5);
        z-index: 99999;
        display: flex;
        align-items: center;
        gap: 10px;
        transition: opacity 0.3s ease, transform 0.3s ease;
    `;
    toast.innerHTML = `<span>${type === "success" ? "✓" : "⚠️"}</span> <span>${message}</span>`;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(-10px)";
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

async function initAdmin() {
    await window.firebaseReady;
    
    // Simulate Admin Check (for this demo, anyone can access but typically we check email)
    if (!window.firebaseCurrentUser) {
        showAdminNotification("Please login first!", "error");
        setTimeout(() => {
            window.location.href = "login.html";
        }, 1200);
        return;
    }

    const db = getFirestore();
    const ordersBody = document.getElementById("adminOrdersTableBody");
    const metricSales = document.getElementById("metricSales");
    const metricOrders = document.getElementById("metricOrders");
    const metricCustomers = document.getElementById("metricCustomers");

    let orders = [];

    try {
        // Fetch global orders
        const ordersCol = collection(db, "orders");
        const ordersSnap = await getDocs(ordersCol);
        
        ordersSnap.forEach(doc => {
            orders.push({ firebaseId: doc.id, ...doc.data() });
        });
        
    } catch (e) {
        console.warn("Could not fetch from Firebase, using localStorage for demo.", e);
        // Fallback to local storage (all users' local orders won't be seen, just current user's)
        orders = JSON.parse(localStorage.getItem("orders")) || [];
    }

    // Sort by date descending
    orders.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Calculate Metrics
    let totalSales = 0;
    let uniqueCustomers = new Set();
    
    orders.forEach(o => {
        totalSales += (o.total || 0);
        if (o.userEmail) uniqueCustomers.add(o.userEmail);
        else if (o.customer && o.customer.fullName) uniqueCustomers.add(o.customer.fullName);
    });

    metricSales.textContent = `${totalSales.toLocaleString()} EGP`;
    metricOrders.textContent = orders.length;
    metricCustomers.textContent = uniqueCustomers.size;

    // Render Table
    if (orders.length === 0) {
        ordersBody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:30px;">No orders found.</td></tr>`;
    } else {
        ordersBody.innerHTML = orders.map(o => `
            <tr>
                <td>#${String(o.id).slice(-6)}</td>
                <td>
                    <div style="font-weight:bold;">${o.customer?.fullName || 'Unknown'}</div>
                    <div style="font-size:11px; color:#888;">${o.userEmail || o.customer?.phone || ''}</div>
                </td>
                <td style="font-size:12px; color:#aaa;">${o.date}</td>
                <td style="color:var(--gold2); font-weight:bold;">${o.total} EGP</td>
                <td>
                    <select class="status-select" data-id="${o.firebaseId || o.id}" data-user="${o.userId || ''}">
                        <option value="pending" ${o.status === 'pending' ? 'selected' : ''}>Pending</option>
                        <option value="packaging" ${o.status === 'packaging' ? 'selected' : ''}>Packaging</option>
                        <option value="in_transit" ${o.status === 'in_transit' ? 'selected' : ''}>In Transit</option>
                        <option value="delivered" ${o.status === 'delivered' ? 'selected' : ''}>Delivered</option>
                    </select>
                </td>
                <td>
                    <button class="update-btn" onclick="updateOrderStatus('${o.firebaseId || o.id}', '${o.userId || ''}')">Update</button>
                </td>
            </tr>
        `).join("");
    }
}

window.updateOrderStatus = async function(orderId, userId) {
    const select = document.querySelector(`select[data-id="${orderId}"]`);
    const newStatus = select.value;
    
    try {
        const db = getFirestore();
        if (orderId && typeof orderId === 'string' && orderId.length > 10) {
            await setDoc(doc(db, "orders", orderId), { status: newStatus }, { merge: true });
            showAdminNotification("Order status updated successfully!");
        } else {
            // LocalStorage fallback
            let localOrders = JSON.parse(localStorage.getItem("orders")) || [];
            let updated = false;
            localOrders = localOrders.map(o => {
                if(String(o.id) === String(orderId)) {
                    o.status = newStatus;
                    updated = true;
                }
                return o;
            });
            if(updated) {
                localStorage.setItem("orders", JSON.stringify(localOrders));
                showAdminNotification("Order status updated locally!");
            }
        }
    } catch(e) {
        console.error("Error updating status:", e);
        showAdminNotification("Failed to update status.", "error");
    }
};

document.addEventListener("DOMContentLoaded", initAdmin);
