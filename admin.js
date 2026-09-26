import { 
    getFirestore, 
    collection, 
    getDocs, 
    getDoc,
    doc, 
    setDoc, 
    addDoc,
    deleteDoc,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";

import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";

const ADMIN_EMAIL = "admin@keroperfume.com";

async function verifyAdminAuth() {
    if (window.firebaseReady) {
        await window.firebaseReady;
    }
    const user = window.firebaseCurrentUser;
    const sessionActive = sessionStorage.getItem("admin_login_verified") === "true";

    if (!user || user.email !== ADMIN_EMAIL || !sessionActive) {
        sessionStorage.removeItem("admin_login_verified");
        window.location.replace("admin-login.html");
        return false;
    }

    document.body.classList.add("admin-authenticated");
    return true;
}

// ================= SECURITY SANITIZATION =================
function escapeHTML(str) {
    if (!str) return "";
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// ================= ADMIN I18N DICTIONARY =================
const adminTranslations = {
    en: {
        controlPanel: "Control Panel",
        dashboard: "Dashboard",
        backToStore: "Back to Store",
        overview: "Overview",
        adminPanel: "Admin Panel",
        totalSales: "Total Sales",
        totalOrders: "Total Orders",
        customers: "Customers",
        recentOrders: "Recent Orders",
        orderId: "Order ID",
        customer: "Customer",
        date: "Date",
        total: "Total",
        status: "Status",
        actions: "Actions",
        update: "Update",
        details: "Details",
        delete: "Delete",
        whatsapp: "WhatsApp",
        refresh: "Refresh",
        filterAll: "All Statuses (All)",
        statusPending: "Pending (قيد المراجعة)",
        statusPackaging: "Packaging (جاري التجهيز)",
        statusInTransit: "In Transit (في الطريق)",
        statusDelivered: "Delivered (تم التوصيل)",
        statusCancelled: "Cancelled (ملغي)",
        searchPlaceholder: "Search by customer, phone, or order ID...",
        noOrders: "No orders found.",
        orderDetails: "Order Details",
        products: "Products",
        shippingAddress: "Shipping Address",
        phone: "Phone",
        payment: "Payment Method",
        discount: "Discount",
        cash: "Cash on Delivery",
        card: "Credit Card",
        statusUpdated: "Order status updated successfully!",
        orderDeleted: "Order deleted successfully!",
        deleteConfirm: "Are you sure you want to delete this order?",
        ordersCount: "orders"
    },
    ar: {
        controlPanel: "لوحة التحكم",
        dashboard: "لوحة المعلومات",
        backToStore: "العودة للمتجر",
        overview: "نظرة عامة",
        adminPanel: "لوحة الإدارة",
        totalSales: "إجمالي المبيعات",
        totalOrders: "إجمالي الطلبات",
        customers: "العملاء",
        recentOrders: "أحدث الطلبات",
        orderId: "رقم الطلب",
        customer: "العميل",
        date: "التاريخ",
        total: "الإجمالي",
        status: "الحالة",
        actions: "الإجراءات",
        update: "تحديث",
        details: "التفاصيل",
        delete: "حذف",
        whatsapp: "واتساب",
        refresh: "تحديث",
        filterAll: "جميع الحالات (الكل)",
        statusPending: "قيد المراجعة",
        statusPackaging: "جاري التجهيز والتغليف",
        statusInTransit: "في الطريق للتوصيل",
        statusDelivered: "تم التوصيل بنجاح",
        statusCancelled: "ملغي ✕",
        searchPlaceholder: "ابحث بالاسم، التليفون، أو رقم الطلب...",
        noOrders: "لا توجد طلبات مسجلة.",
        orderDetails: "تفاصيل الطلب",
        products: "العطور المطلوبة",
        shippingAddress: "عنوان التوصيل",
        phone: "رقم الهاتف",
        payment: "طريقة الدفع",
        discount: "الخصم",
        cash: "الدفع عند الاستلام",
        card: "بطاقة بنكية",
        statusUpdated: "تم تحديث حالة الطلب بنجاح! ✓",
        orderDeleted: "تم حذف الطلب بنجاح!",
        deleteConfirm: "هل أنت متأكد من حذف هذا الطلب نهائياً؟",
        ordersCount: "طلب"
    }
};

let currentAdminLang = localStorage.getItem("admin_lang") || localStorage.getItem("language") || "en";
let globalOrders = [];

function at(key) {
    return (adminTranslations[currentAdminLang] && adminTranslations[currentAdminLang][key]) || key;
}

function applyAdminLanguage() {
    const isAr = currentAdminLang === "ar";
    document.documentElement.setAttribute("dir", isAr ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", currentAdminLang);

    // Update lang button label
    const labelEl = document.getElementById("adminLangLabel");
    if (labelEl) {
        labelEl.textContent = isAr ? "English" : "العربية";
    }

    // Update static i18n texts
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const k = el.getAttribute("data-i18n");
        if (at(k)) el.textContent = at(k);
    });

    // Update search placeholder
    const searchInput = document.getElementById("adminSearchInput");
    if (searchInput) {
        searchInput.placeholder = at("searchPlaceholder");
    }

    // Update live date
    const dateEl = document.getElementById("adminLiveDate");
    if (dateEl) {
        dateEl.textContent = new Date().toLocaleDateString(isAr ? "ar-EG" : "en-US", {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });
    }

    // Re-render table if orders already loaded
    if (globalOrders.length) {
        renderFilteredOrders();
    }
}

// Toast Notification
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
        background: #11131a;
        border: 1px solid ${type === "error" ? "#ff4d4d" : "#c9a227"};
        color: #fff;
        border-radius: 10px;
        font-family: inherit;
        font-size: 14px;
        font-weight: 700;
        box-shadow: 0 10px 30px rgba(0,0,0,0.6);
        z-index: 999999;
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
    }, 2800);
}

// ================= LOAD & RENDER ORDERS =================

async function loadAdminOrders() {
    await window.firebaseReady;

    const ordersBody = document.getElementById("adminOrdersTableBody");
    const metricSales = document.getElementById("metricSales");
    const metricOrders = document.getElementById("metricOrders");
    const metricCustomers = document.getElementById("metricCustomers");

    if (ordersBody) {
        ordersBody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:30px; color:#888;">⏳ Loading orders...</td></tr>`;
    }

    try {
        const db = getFirestore();
        const ordersCol = collection(db, "orders");
        
        // Use onSnapshot for REAL-TIME blazing fast updates
        onSnapshot(ordersCol, (ordersSnap) => {
            let orders = [];
            ordersSnap.forEach(docSnap => {
                orders.push({ firebaseId: docSnap.id, ...docSnap.data() });
            });

            // Remove strict exact duplicates if multiple submitted with identical ID
            const uniqueMap = new Map();
            orders.forEach(o => {
                const key = String(o.id || o.firebaseId);
                if (!uniqueMap.has(key)) {
                    uniqueMap.set(key, o);
                } else {
                    // Keep the one with cancelled status if available
                    const existing = uniqueMap.get(key);
                    if (o.status === "cancelled") {
                        uniqueMap.set(key, o);
                    }
                }
            });
            orders = Array.from(uniqueMap.values());

            // Sort by date descending
            orders.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));

            globalOrders = orders;

            // Calculate Metrics
            let totalSales = 0;
            let uniqueCustomers = new Set();

            orders.forEach(o => {
                if (o.status !== "cancelled") {
                    totalSales += Number(o.total || 0);
                }
                if (o.userEmail) uniqueCustomers.add(o.userEmail);
                else if (o.customer && o.customer.fullName) uniqueCustomers.add(o.customer.fullName);
                else if (o.customer && o.customer.phone) uniqueCustomers.add(o.customer.phone);
            });

            if (metricSales) metricSales.textContent = `${totalSales.toLocaleString()} EGP`;
            if (metricOrders) metricOrders.textContent = orders.length;
            if (metricCustomers) metricCustomers.textContent = uniqueCustomers.size;

            renderFilteredOrders();
        }, (error) => {
            console.error("Error listening to orders:", error);
            if (ordersBody) {
                ordersBody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:30px; color:#ff4d4d;">⚠️ Error loading orders. Check console.</td></tr>`;
            }
        });

    } catch (e) {
        console.warn("Could not set up Firebase listener, falling back to localStorage", e);
        // Fallback code here if needed
    }
}

function renderFilteredOrders() {
    const ordersBody = document.getElementById("adminOrdersTableBody");
    if (!ordersBody) return;

    const searchTerm = (document.getElementById("adminSearchInput")?.value || "").toLowerCase().trim();
    const statusFilter = document.getElementById("adminStatusFilter")?.value || "all";

    let filtered = globalOrders.filter(o => {
        const statusMatch = statusFilter === "all" || o.status === statusFilter || (!o.status && statusFilter === "pending");
        if (!statusMatch) return false;

        if (!searchTerm) return true;

        const idStr = String(o.id || "").toLowerCase();
        const name = (o.customer?.fullName || "").toLowerCase();
        const phone = (o.customer?.phone || "").toLowerCase();
        const email = (o.userEmail || "").toLowerCase();

        return idStr.includes(searchTerm) || name.includes(searchTerm) || phone.includes(searchTerm) || email.includes(searchTerm);
    });

    const countTag = document.getElementById("ordersCountTag");
    if (countTag) {
        countTag.textContent = `${filtered.length} ${at("ordersCount")}`;
    }

    if (filtered.length === 0) {
        ordersBody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:35px; color:#888;">${at("noOrders")}</td></tr>`;
        return;
    }

    ordersBody.innerHTML = filtered.map(o => {
        const orderIdStr = String(o.id || o.firebaseId);
        const currentStatus = o.status || "pending";
        const isCancelled = currentStatus === "cancelled";
        const customerPhone = o.customer?.phone || o.customer?.fullName || "";
        const rawPhone = (o.customer?.phone || "").replace(/\D/g, "");
        // Build WhatsApp number: Egyptian numbers start with 0 → add 2
        const waPhone = rawPhone ? (rawPhone.startsWith('0') ? '2' + rawPhone : rawPhone) : "201208077173";
        const waName = o.customer?.fullName || "";
        const waMsg = encodeURIComponent(`🌹 متجر العطور\n👤 العميل: ${waName}\n📦 رقم الطلب: #${orderIdStr}\n📞 الهاتف: ${o.customer?.phone || 'غير محدد'}\n💰 الإجمالي: ${Number(o.total||0).toLocaleString()} EGP\n✨ التحديث الجديد على طلبك...`);

        let statusText = currentStatus;
        if (currentStatus === "pending") statusText = at("statusPending");
        else if (currentStatus === "packaging") statusText = at("statusPackaging");
        else if (currentStatus === "in_transit") statusText = at("statusInTransit");
        else if (currentStatus === "delivered") statusText = at("statusDelivered");
        else if (currentStatus === "cancelled") statusText = at("statusCancelled");

        return `
            <tr id="admin-row-${escapeHTML(orderIdStr)}">
                <td style="font-weight:700; color:var(--gold2, #c9a227);"><span style='display:block; font-size:13px;'>#${escapeHTML(orderIdStr.slice(-8))}</span></td>
                <td>
                    <div style="font-weight:700; color:#fff; margin-bottom:3px;">${escapeHTML(o.customer?.fullName || 'Guest')}</div>
                    <div style="font-size:11px; color:#25D366; font-weight:600;">📞 ${escapeHTML(o.customer?.phone || '—')}</div>
                    <div style="font-size:11px; color:#888;">${escapeHTML(o.userEmail || '')}</div>
                </td>
                <td style="font-size:12px; color:#aaa; min-width:120px;">${escapeHTML(o.date || 'N/A')}</td>
                <td style="color:var(--gold2, #c9a227); font-weight:800; font-size:15px; white-space:nowrap;">
                    ${Number(o.total || 0).toLocaleString()} EGP
                </td>
                <td style='min-width:160px;'>
                    <span class="status-badge status-${currentStatus}" style='display:inline-block; margin-bottom:6px;'>
                        ${statusText}
                    </span>
                    <select class="status-select" data-id="${orderIdStr}" data-firebase="${o.firebaseId || ''}" data-user="${o.userId || ''}" style='width:100%;'>
                        <option value="pending" ${currentStatus === 'pending' ? 'selected' : ''}>⏳ ${at("statusPending")}</option>
                        <option value="packaging" ${currentStatus === 'packaging' ? 'selected' : ''}>🎁 ${at("statusPackaging")}</option>
                        <option value="in_transit" ${currentStatus === 'in_transit' ? 'selected' : ''}>🚚 ${at("statusInTransit")}</option>
                        <option value="delivered" ${currentStatus === 'delivered' ? 'selected' : ''}>✅ ${at("statusDelivered")}</option>
                        <option value="cancelled" ${currentStatus === 'cancelled' ? 'selected' : ''}>✕ ${at("statusCancelled")}</option>
                    </select>
                </td>
                <td style='min-width:200px;'>
                    <div class="action-buttons-cell">
                        <button class="admin-btn update-btn" onclick="updateOrderStatus('${orderIdStr}')">
                            ✓ ${at("update")}
                        </button>
                        <button class="admin-btn details-btn" onclick="openOrderModal('${orderIdStr}')">
                            👁️ ${at("details")}
                        </button>
                        <a class="admin-btn whatsapp-action-btn" href="https://wa.me/${waPhone}?text=${waMsg}" target="_blank" rel="noopener noreferrer">
                            💬 ${at("whatsapp")}
                        </a>
                        <button class="admin-btn delete-action-btn" onclick="adminDeleteOrder('${orderIdStr}')">
                            🗑️ ${at("delete")}
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join("");
}

// ================= UPDATE ORDER STATUS =================

window.updateOrderStatus = async function(orderId) {
    const select = document.querySelector(`select[data-id="${orderId}"]`);
    if (!select) return;

    const newStatus = select.value;
    const firebaseId = select.getAttribute("data-firebase");
    const userId = select.getAttribute("data-user");

    try {
        const db = getFirestore();

        // 1. Update in Firebase global collection
        if (firebaseId) {
            await setDoc(doc(db, "orders", firebaseId), { status: newStatus }, { merge: true });
        } else {
            const ordersCol = collection(db, "orders");
            const snap = await getDocs(ordersCol);
            for (const d of snap.docs) {
                if (String(d.data().id) === String(orderId) || String(d.id) === String(orderId)) {
                    await setDoc(doc(db, "orders", d.id), { status: newStatus }, { merge: true });
                }
            }
        }

        // 2. Update user document if userId present
        let targetUserId = userId;
        if (!targetUserId) {
            const foundOrder = globalOrders.find(o => String(o.id || o.firebaseId) === String(orderId));
            if (foundOrder && foundOrder.userId) {
                targetUserId = foundOrder.userId;
            }
        }

        if (targetUserId) {
            const userRef = doc(db, "users", targetUserId);
            const userSnap = await getDoc(userRef);
            if (userSnap.exists() && userSnap.data().orders) {
                const uOrders = userSnap.data().orders.map(o => {
                    if (String(o.id) === String(orderId)) {
                        return { ...o, status: newStatus };
                    }
                    return o;
                });
                await setDoc(userRef, { orders: uOrders }, { merge: true });
            }
        }

        // 3. Update localStorage
        let localOrders = JSON.parse(localStorage.getItem("orders")) || [];
        localOrders = localOrders.map(o => {
            if (String(o.id) === String(orderId)) {
                return { ...o, status: newStatus };
            }
            return o;
        });
        localStorage.setItem("orders", JSON.stringify(localOrders));

        // 4. Update memory state & re-render
        globalOrders = globalOrders.map(o => {
            if (String(o.id || o.firebaseId) === String(orderId)) {
                return { ...o, status: newStatus };
            }
            return o;
        });

        renderFilteredOrders();
        showAdminNotification(at("statusUpdated"), "success");

    } catch (e) {
        console.error("Error updating status:", e);
        showAdminNotification("Failed to update status: " + e.message, "error");
    }
};

// ================= DELETE ORDER =================

window.adminDeleteOrder = async function(orderId) {
    if (!confirm(at("deleteConfirm"))) return;

    try {
        const db = getFirestore();
        const ordersCol = collection(db, "orders");
        const snap = await getDocs(ordersCol);
        for (const d of snap.docs) {
            if (String(d.data().id) === String(orderId) || String(d.id) === String(orderId)) {
                await deleteDoc(doc(db, "orders", d.id));
            }
        }

        // Delete from localStorage
        let localOrders = JSON.parse(localStorage.getItem("orders")) || [];
        localOrders = localOrders.filter(o => String(o.id) !== String(orderId));
        localStorage.setItem("orders", JSON.stringify(localOrders));

        // Delete from memory & re-render
        globalOrders = globalOrders.filter(o => String(o.id || o.firebaseId) !== String(orderId));
        renderFilteredOrders();
        showAdminNotification(at("orderDeleted"), "success");

    } catch (e) {
        console.error("Error deleting order:", e);
        showAdminNotification("Failed to delete order.", "error");
    }
};

// ================= ORDER DETAILS MODAL =================

window.openOrderModal = function(orderId) {
    const order = globalOrders.find(o => String(o.id || o.firebaseId) === String(orderId));
    if (!order) return;

    const modal = document.getElementById("orderDetailsModal");
    const title = document.getElementById("modalOrderTitle");
    const body = document.getElementById("modalOrderBody");

    if (!modal || !body) return;

    title.textContent = `${at("orderDetails")} #${String(order.id || order.firebaseId).slice(-6)}`;

    const productsHtml = (order.products || []).map(p => `
        <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 0; border-bottom:1px solid rgba(255,255,255,0.06); font-size:14px;">
            <div>
                <strong style="color:#fff;">${p.name}</strong>
                <span style="color:#888; font-size:12px; margin-left:6px;">× ${p.quantity || 1}</span>
            </div>
            <span style="color:var(--gold2); font-weight:700;">${((p.quantity || 1) * Number(p.price)).toLocaleString()} EGP</span>
        </div>
    `).join("") || '<p style="color:#888;">No products found</p>';

    const paymentText = order.customer?.payment === "cash" ? at("cash") : (order.customer?.payment === "card" ? at("card") : (order.customer?.payment || "Cash"));

    body.innerHTML = `
        <div style="margin-bottom:20px;">
            <h4 style="margin:0 0 10px 0; color:var(--gold2); font-size:15px;">👤 ${at("customer")}:</h4>
            <div style="background:#0a0b0e; padding:14px; border-radius:10px; border:1px solid rgba(255,255,255,0.05); font-size:13px; line-height:1.8;">
                <div><strong>${at("customer")}:</strong> ${order.customer?.fullName || 'N/A'}</div>
                <div><strong>${at("phone")}:</strong> ${order.customer?.phone || 'N/A'}</div>
                <div><strong>${at("shippingAddress")}:</strong> ${order.customer?.address || 'N/A'}</div>
                <div><strong>${at("payment")}:</strong> ${paymentText}</div>
            </div>
        </div>

        <div style="margin-bottom:20px;">
            <h4 style="margin:0 0 10px 0; color:var(--gold2); font-size:15px;">🛍️ ${at("products")}:</h4>
            <div style="background:#0a0b0e; padding:10px 14px; border-radius:10px; border:1px solid rgba(255,255,255,0.05);">
                ${productsHtml}
            </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; background:#0a0b0e; padding:14px 18px; border-radius:10px; border:1px solid rgba(201,162,39,0.2);">
            <span style="font-weight:700; color:#fff;">${at("total")}:</span>
            <span style="font-size:20px; font-weight:800; color:var(--gold2);">${Number(order.total || 0).toLocaleString()} EGP</span>
        </div>
    `;

    modal.style.display = "flex";
};

window.closeOrderModal = function() {
    const modal = document.getElementById("orderDetailsModal");
    if (modal) modal.style.display = "none";
};

// Close modal on click outside
window.addEventListener("click", (e) => {
    const modal = document.getElementById("orderDetailsModal");
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// ================= INITIALIZATION & EVENT LISTENERS =================

function initAdminEvents() {
    // Language Toggle
    const langBtn = document.getElementById("adminLangToggle");
    if (langBtn) {
        langBtn.addEventListener("click", () => {
            currentAdminLang = currentAdminLang === "ar" ? "en" : "ar";
            localStorage.setItem("admin_lang", currentAdminLang);
            applyAdminLanguage();
        });
    }

    // Search Input
    const searchInput = document.getElementById("adminSearchInput");
    if (searchInput) {
        searchInput.addEventListener("input", renderFilteredOrders);
    }

    // Status Filter
    const statusFilter = document.getElementById("adminStatusFilter");
    if (statusFilter) {
        statusFilter.addEventListener("change", renderFilteredOrders);
    }

    // Refresh Button
    const refreshBtn = document.getElementById("adminRefreshBtn");
    if (refreshBtn) {
        refreshBtn.addEventListener("click", () => {
            loadAdminOrders();
            showAdminNotification(currentAdminLang === "ar" ? "تم تحديث البيانات! ✓" : "Orders refreshed! ✓");
        });
    }

    // Logout Button
    const logoutBtn = document.getElementById("adminLogoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", async () => {
            sessionStorage.removeItem("admin_login_verified");
            try {
                const auth = getAuth();
                await signOut(auth);
            } catch (e) {
                console.error("Sign out error:", e);
            }
            window.location.href = "admin-login.html";
        });
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    const isAuthorized = await verifyAdminAuth();
    if (!isAuthorized) return;

    applyAdminLanguage();
    initAdminEvents();
    loadAdminOrders();
});
