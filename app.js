// ================= PERFUME STORE =================

const perfumes = [
    { id: 1, name: "Dior Sauvage", price: 3500, image: "perfume1.jpg", description: "A fresh and powerful fragrance with a modern masculine character. Opens with a radiant burst of Calabrian bergamot and pepper, then dries down to ambroxan and warm woods.", family: "fresh", gender: "men", notes: "Bergamot, Pepper, Ambroxan, Cedarwood", sillage: "beast", rating: 4.8, reviewCount: 142 },
    { id: 2, name: "Bleu de Chanel", price: 4200, image: "perfume2.jpg", description: "An elegant fragrance with fresh citrus and woody notes. A bold, clean and sensual scent expressing freedom with a woody aromatic signature.", family: "woody", gender: "men", notes: "Citrus, Ginger, Incense, Vetiver, Sandalwood", sillage: "strong", rating: 4.7, reviewCount: 118 },
    { id: 3, name: "Acqua di Gio", price: 3000, image: "perfume3.jpg", description: "A fresh aquatic fragrance inspired by the Mediterranean sea. Captures the sensation of water, sun and the scent of a flower opening.", family: "aquatic", gender: "men", notes: "Bergamot, Neroli, Sea Accord, Jasmine, Patchouli", sillage: "moderate", rating: 4.5, reviewCount: 95 },
    { id: 4, name: "One Million", price: 2800, image: "perfume4.jpg", description: "A warm and attractive fragrance with spicy and woody notes. An expression of gold, luxury and seduction for the modern man.", family: "oriental", gender: "men", notes: "Grapefruit, Blood Mandarin, Cinnamon, Leather, Amber", sillage: "strong", rating: 4.4, reviewCount: 87 },
    { id: 5, name: "Versace Eros", price: 3200, image: "perfume5.jpg", description: "A bold fragrance with fresh and woody notes, inspired by the Greek God of love. A hymn to the sensuality of the Mediterranean.", family: "fresh", gender: "men", notes: "Mint, Green Apple, Tonka Bean, Amber, Vanilla", sillage: "strong", rating: 4.6, reviewCount: 104 },
    { id: 6, name: "YSL Y", price: 3800, image: "perfume6.jpg", description: "A modern fresh fragrance with an elegant character. A vibrant rush of energy that is bold and intoxicating.", family: "woody", gender: "men", notes: "Bergamot, Apple, Ginger, Juniper Berry, Amberwood, Fir Balsam", sillage: "moderate", rating: 4.5, reviewCount: 76 },
    { id: 7, name: "Armani Code", price: 3400, image: "perfume7.jpg", description: "A sophisticated fragrance with warm and seductive notes. A unique signature that combines sensuality and sophistication.", family: "oriental", gender: "men", notes: "Bergamot, Star Anise, Olive Blossom, Guaiac Wood, Tobacco, Vanilla", sillage: "moderate", rating: 4.6, reviewCount: 91 },
    { id: 8, name: "Hugo Boss Bottled", price: 2700, image: "perfume8.jpg", description: "A classic fragrance with fresh and warm notes. Crafted for the confident and ambitious man who knows who he is.", family: "woody", gender: "men", notes: "Apple, Cinnamon, Mahogany, Sandalwood, Vetiver", sillage: "moderate", rating: 4.3, reviewCount: 68 },
    { id: 9, name: "Tom Ford Oud Wood", price: 6500, image: "perfume9.jpg", description: "A luxurious woody fragrance with rich oud notes. An exclusive blend of rare oud wood with exotic spices and earthy vetiver.", family: "oriental", gender: "unisex", notes: "Oud, Rosewood, Cardamom, Sandalwood, Vetiver, Tonka Bean", sillage: "beast", rating: 4.9, reviewCount: 203 },
    { id: 10, name: "Creed Aventus", price: 7500, image: "perfume10.jpg", description: "A premium fragrance with a powerful fruity and woody character. Celebrates strength, success and power of famous conquerors.", family: "fruity", gender: "men", notes: "Pineapple, Bergamot, Apple, Rose, Jasmine, Musk, Oak Moss, Ambergris", sillage: "beast", rating: 4.9, reviewCount: 317 },
    { id: 11, name: "Baccarat Rouge 540", price: 8200, image: "perfume11.jpg", description: "An iconic amber floral fragrance with radiant jasmine and rich cedarwood. A shimmering blend of saffron and fir resin on a bedrock of ambergris.", family: "floral", gender: "unisex", notes: "Saffron, Jasmine, Amberwood, Fir Resin, Cedar", sillage: "beast", rating: 5.0, reviewCount: 428 },
    { id: 12, name: "Gucci Bloom", price: 3900, image: "perfume12.jpg", description: "A sophisticated white floral fragrance capturing a vibrant blooming garden. Rich, full bodied and intense.", family: "floral", gender: "women", notes: "Tuberose, Jasmine, Rangoon Creeper, Orris Root", sillage: "moderate", rating: 4.7, reviewCount: 156 }
];

let cart = [];
let cartLoaded = false;
let currentLanguage = localStorage.getItem("language") || "en";

const translations = {
    en: {
        home: "Home", products: "Products", cart: "Cart 🛒", orders: "My Orders 📦", wishlist: "Wishlist ❤️", profile: "My Profile 👤", addedToCart: "added to your cart 🛒", contactTitle: "Contact Us", aboutEyebrow: "Our Story", about: "About Us", name: "Name",
        heroTag: "Exclusive Royal Collection",
        heroTitlePart1: "Timeless Scents,",
        heroTitlePart2: "Pure Elegance",
        heroSubtitle: "Immerse yourself in our curated collection of masterfully crafted perfumes made to leave an unforgettable aura.",
        exploreCollection: "Explore Perfumes 🌟",
        ourStoryBtn: "Our Story 🌹",
        trust1Title: "100% Authentic",
        trust1Desc: "Direct from certified luxury houses",
        trust2Title: "Express Shipping",
        trust2Desc: "Free delivery on orders over 2000 EGP",
        trust3Title: "Luxury Gift Box",
        trust3Desc: "Complimentary signature packaging",
        trust4Title: "Dedicated Support",
        trust4Desc: "24/7 personal customer care",
        bestSellersEyebrow: "Client Favorites",
        bestSellersTitlePart1: "Best",
        bestSellersTitlePart2: "Sellers",
        bestSellersSubtitle: "The most beloved, iconic fragrances chosen by connoisseurs worldwide.",
        viewAllFragrances: "View All 12 Fragrances →",
        categoriesEyebrow: "Curated Collections",
        categoriesTitlePart1: "Explore",
        categoriesTitlePart2: "By Mood",
        categoriesSubtitle: "Find the exact olfactory family that matches your character and atmosphere.",
        category1Tag: "Power & Prestige",
        category1Title: "Men's Elegance",
        category1Desc: "Crisp citrus, bold ambroxan & smoky woods.",
        category2Tag: "Grace & Radiance",
        category2Title: "Women's Allure",
        category2Desc: "Exquisite floral bouquets, sweet vanilla & musk.",
        category3Tag: "Mystique & Royalty",
        category3Title: "Oriental & Oud",
        category3Desc: "Rare Cambodian oud, spicy amber & dark leather.",
        discover: "Discover",
        spotlightEyebrow: "Featured Scent",
        spotlightDesc: "A radiant, luminous fragrance that caresses the skin like an amber and woody floral whisper. Featuring ethereal jasmine, saffron, cedarwood and warm ambergris.",
        reviewsEyebrow: "Client Feedback",
        reviewsTitlePart1: "Loved By",
        reviewsTitlePart2: "Perfume Enthusiasts",
        reviewsSubtitle: "Read what our verified clients have to say about their signature fragrances and unboxing experience.",
        review1Text: "\"The longevity and projection of Dior Sauvage from this store are unbelievable. 100% authentic and packaging was magnificent.\"",
        review1Author: "Ahmed Mostafa",
        review1Location: "Cairo, Egypt",
        review2Text: "\"Fast delivery within 24 hours and the gift box made me feel like royalty. Baccarat Rouge 540 is hands down my new favorite.\"",
        review2Author: "Nourhan El-Sayed",
        review2Location: "Alexandria, Egypt",
        review3Text: "\"Tom Ford Oud Wood is pure sophistication. Ordering was smooth and the customer support was exceptionally polite.\"",
        review3Author: "Kareem Fawzy",
        review3Location: "Giza, Egypt",
        vipEyebrow: "Privilege Club",
        vipTitle: "Join The VIP Fragrance Society",
        vipDesc: "Subscribe to receive exclusive access to private sales, limited editions, and 10% off your next luxury order.",
        joinVipBtn: "Join Now ✨",
        verifyCode: "Verify Code",
        enterVerificationCode: "Enter Verification Code",
        verificationDescription: "Enter the verification code sent to your email.",
        verificationCode: "Verification Code",
        verificationCodePlaceholder: "Enter 6-digit code",
        verifyCodeButton: "Verify Code",
        backToForgotPassword: "← Back",
        forgotPassword: "Forgot Password",
        resetPassword: "Reset Password",
        forgotDescription: "Enter your email address and we will send you a link to reset your password.",
        emailPlaceholder: "Enter your email",
        sendResetEmail: "Send Reset Email",
        backToLogin: "← Back to Login",
        agreeTerms: "I agree to the",
        and: "and",
        orContinueWith: "Or continue with",
        continueGoogle: "Continue with Google",
        continueFacebook: "Continue with Facebook",
        firstName: "First Name",
        lastName: "Last Name",
        remove: "Remove",
        cardPaymentTitle: "Card Payment",
        cardPaymentMessage: "Card payment will be available soon.",
        privacyEyebrow: "Your Privacy",
        privacyTitle: "Privacy Policy",
        privacyDescription: "Your privacy matters to us.",
        privacyDataTitle: "Information We Collect",
        privacyDataText: "We may collect information such as your name, email, phone number, address, and order information when you use the website.",
        privacyUseTitle: "How We Use Your Information",
        privacyUseText: "Your information is used to provide our services, process orders, improve the shopping experience, and communicate with you when necessary.",
        privacyStorageTitle: "Data Storage",
        privacyStorageText: "This website may use browser local storage to keep account, cart, wishlist, language, and order information.",
        privacySecurityTitle: "Data Security",
        privacySecurityText: "We take reasonable steps to protect the information used by the website. Users should also keep their account information secure.",
        privacy: "Privacy Policy",
        termsEyebrow: "Store Policies",
        termsTitle: "Terms & Conditions",
        termsDescription: "Please read our terms before using Perfume Store.",
        termsOrdersTitle: "Orders",
        termsOrdersText: "Customers are responsible for providing accurate information when placing an order. Orders are subject to availability.",
        termsPricesTitle: "Prices & Payment",
        termsPricesText: "All prices are displayed in Egyptian Pounds. Available payment methods are shown during checkout.",
        termsCancellationTitle: "Cancellation & Returns",
        termsCancellationText: "Orders may be cancelled according to the store's applicable cancellation and return policy.",
        termsResponsibilityTitle: "Customer Responsibility",
        termsResponsibilityText: "Customers must provide correct contact and delivery information and use the website responsibly.",
        terms: "Terms & Conditions",
        aboutTitle: "About Perfume Store",
        aboutDescription: "Discover fragrances made to express your personality and style.",
        aboutWhoWeAre: "Who We Are",
        aboutWhoWeAreText: "Perfume Store is a modern fragrance store offering a carefully selected collection of perfumes for every personality and occasion.",
        aboutQuality: "Our Quality",
        aboutQualityText: "We focus on quality, elegance, and an enjoyable shopping experience from discovering a perfume to receiving your order.",
        aboutMission: "Our Mission",
        aboutMissionText: "Our mission is to make finding your favorite fragrance simple, enjoyable, and accessible to everyone.",
        aboutWhyUs: "Why Choose Us?",
        aboutFeature1: "Carefully selected fragrances",
        aboutFeature2: "Easy and simple shopping",
        aboutFeature3: "Convenient ordering experience",
        aboutFeature4: "Customer-focused support",
        contactDescription: "Have a question? We would love to hear from you.",
        contactInfoTitle: "Contact Information",
        message: "Message",
        sendMessage: "Send Message",
        messageSent: "Your message has been sent successfully! ✉️",
        login: "Login", logout: "Logout", register: "Create Account", welcome: "Welcome, ",
        search: "Search for a perfume...", allPrices: "All Prices", low: "Less than 3000 EGP",
        medium: "3000 - 5000 EGP", high: "More than 5000 EGP", ourPerfumes: "Our Perfumes",
        viewDetails: "View Details", addToCart: "Add to Cart", shoppingCart: "Shopping Cart",
        emptyCart: "Your cart is empty 🛒", clearCart: "Clear Cart", checkout: "Checkout",
        total: "Total", checkoutTitle: "Checkout", fullName: "Full Name", phone: "Phone Number",
        address: "Address", payment: "Payment Method", selectPayment: "Select Payment Method",
        cash: "Cash on Delivery", card: "Credit Card", placeOrder: "Place Order",
        confirmed: "Order Confirmed ✅", thankYou: "Thank you for your order!",
        continueShopping: "Continue Shopping", noOrders: "No orders found 📦", date: "Date",
        orderNumber: "Order #", customer: "Customer", backProducts: "Back to Products",
        rate: "Rate this perfume ⭐", reviewPlaceholder: "Write your review...", submitReview: "Submit Review",
        noReviews: "No reviews yet.", reviewSuccess: "Review submitted successfully! ⭐",
        writeReview: "Please write a review.", accountCreated: "Account created successfully!",
        noAccount: "Don't have an account?", alreadyAccount: "Already have an account?",
        passwordsMismatch: "Passwords do not match", noAccountFound: "No account found. Please register first.",
        wrongLogin: "Wrong email or password", loginSuccess: "Login successful!",
        email: "Email", password: "Password", confirmPassword: "Confirm Password", name: "Name",
        footer: "Luxury fragrances, timeless elegance.", rights: "All rights reserved.",
        filterTitle: "Filter & Sort",
        showFilters: "⚙️ Filters",
        clearFilters: "Clear All",
        sortBy: "Sort By",
        sortDefault: "Featured",
        sortLowHigh: "Price: Low → High",
        sortHighLow: "Price: High → Low",
        sortRating: "Highest Rated",
        sortReviews: "Most Reviewed",
        familyLabel: "Scent Family",
        familyAll: "All Families",
        familyFresh: "🌬️ Fresh",
        familyWoody: "🌲 Woody",
        familyFloral: "🌸 Floral",
        familyOriental: "🌙 Oriental / Oud",
        familyAquatic: "🌊 Aquatic",
        familyFruity: "🍑 Fruity",
        genderLabel: "For",
        genderAll: "Everyone",
        genderMen: "👔 Men",
        genderWomen: "👗 Women",
        genderUnisex: "⚧ Unisex",
        noResults: "No fragrances match your filters.",
        scentFamily: "Scent Family",
        topNotes: "Key Notes",
        sillageLabel: "Sillage",
        sillageBeast: "🔥 Beast Mode",
        sillageStrong: "💪 Strong",
        sillageModerate: "✨ Moderate",
        sillageLight: "🌸 Light",
        similarTitle: "You May Also Like",
        addToWishlist: "Save ❤️",
        removeFromWishlist: "Saved ❤️",
        reviewsCount: "reviews",
        promoLabel: "Promo Code",
        promoPlaceholder: "e.g. LUXURY10, ROYAL20...",
        applyPromo: "Apply",
        removePromo: "Remove",
        promoSuccess: "Promo code applied successfully!",
        promoInvalid: "Invalid or expired promo code.",
        promoAlreadyApplied: "This promo code is already applied.",
        promoRequired: "Please enter a promo code.",
        orderSummary: "Order Summary",
        subtotal: "Subtotal",
        discount: "Discount",
        freeShipping: "Free Delivery",
        availablePromos: "Available Codes:",
        printInvoice: "Print Invoice 🖨️",
        cancelOrder: "Cancel Order",
        orderCancelled: "Order has been cancelled.",
        confirmCancelOrder: "Are you sure you want to cancel this order?",
        orderStatus: "Order Status",
        statusPending: "Order Received 📝",
        statusPackaging: "Luxury Packing 🎁",
        statusInTransit: "Out for Delivery 🚚",
        statusDelivered: "Delivered ✨",
        statusCancelled: "Cancelled ✕",
        verifiedBuyer: "Verified Buyer",
        customerReviews: "Customer Reviews",
        ratingBreakdown: "Rating Breakdown",
        rateThisFragrance: "Rate this Fragrance",
        selectRating: "Please select a star rating first!",
        yourName: "Your Name",
        writeYourReview: "Share your experience with this fragrance...",
        share: "Share 📤",
        shareProduct: "Share Fragrance",
        shareSuccess: "Product link copied to clipboard! 🔗",
        deleteOrder: "Delete Order",
        confirmDeleteOrder: "Are you sure you want to permanently delete this order from your history?",
        orderDeleted: "Order deleted successfully 🗑️",
        clearAllOrders: "Clear All Orders",
        confirmClearAllOrders: "Warning: Are you sure you want to delete all orders permanently? This action cannot be undone.",
        allOrdersCleared: "All orders cleared successfully 🗑️",
        ordersCountText: "orders in history",
        deleteReview: "Delete Review",
        confirmDeleteReview: "Are you sure you want to delete this review?",
        reviewDeleted: "Review deleted successfully 🗑️"
    },
    ar: {
        home: "الرئيسية", products: "العطور", cart: "السلة 🛒", orders: "طلباتي 📦", wishlist: "المفضلة ❤️", profile: "حسابي 👤", addedToCart: "تمت إضافته إلى السلة 🛒", contactTitle: "تواصل معنا", aboutEyebrow: "قصتنا", about: "من نحن", name: "الاسم",
        heroTag: "تشكيلة ملكية حصرية",
        heroTitlePart1: "عطور خالدة،",
        heroTitlePart2: "وأناقة مطلقة",
        heroSubtitle: "اكتشف مجموعة عطورنا الفاخرة المصممة بعناية لتترك حضوراً استثنائياً وأثراً لا يُنسى.",
        exploreCollection: "استكشف العطور 🌟",
        ourStoryBtn: "قصتنا 🌹",
        trust1Title: "أصلية 100%",
        trust1Desc: "مباشرة من بيوت العطور العالمية",
        trust2Title: "شحن سريع ومجاني",
        trust2Desc: "توصيل مجاني للطلبات فوق 2000 جنيه",
        trust3Title: "تغليف هدايا فاخر",
        trust3Desc: "تغليف مميز مع كل طلب كهدية",
        trust4Title: "خدمة عملاء VIP",
        trust4Desc: "دعم متواصل على مدار الساعة",
        bestSellersEyebrow: "المفضلة لدى عملائنا",
        bestSellersTitlePart1: "الأكثر",
        bestSellersTitlePart2: "مبيعاً",
        bestSellersSubtitle: "أشهر العطور وأكثرها طلباً التي نالت إعجاب عشاق الفخامة والتميز.",
        viewAllFragrances: "عرض جميع العطور (12 عطر) ←",
        categoriesEyebrow: "تشكيلات حصرية",
        categoriesTitlePart1: "اختر حسب",
        categoriesTitlePart2: "ذوقك وشخصيتك",
        categoriesSubtitle: "اختر العطر الذي يعبر عن حضورك وأسلوبك الخاص من بين أرقى العائلات العطرية.",
        category1Tag: "قوة وهيبة",
        category1Title: "أناقة رجالية",
        category1Desc: "انتعاش الحمضيات والأخشاب العطرية الفاخرة.",
        category2Tag: "سحر وجاذبية",
        category2Title: "أنوثة راقية",
        category2Desc: "باقات الزهور الفاتنة مع الفانيليا والمسك.",
        category3Tag: "أصالة وفخامة ملكية",
        category3Title: "عطور شرقية وعود",
        category3Desc: "دهن العود واللبان والعنبر والجلود الفاخرة.",
        discover: "اكتشف",
        spotlightEyebrow: "عطر الموسم المميز",
        spotlightDesc: "عطر ساحر ومضيء يداعب البشرة بلمسات عنبرية وخشبية وزهرية. يجمع بين الياسمين الهوائي، والزعفران، وخشب الأرز، والعنبر الدافئ.",
        reviewsEyebrow: "تجارب العملاء",
        reviewsTitlePart1: "يثق بنا",
        reviewsTitlePart2: "عشاق العطور الراقية",
        reviewsSubtitle: "اقرأ تقييمات عملائنا عن ثبات وفوحان العطور وتجربة التغليف الفاخرة.",
        review1Text: "\"ثبات وفوحان عطر سوفاج لا يُصدق! العطر أصلي 100% والتغليف الملكي فاق توقعاتي.\"",
        review1Author: "أحمد مصطفى",
        review1Location: "القاهرة، مصر",
        review2Text: "\"توصيل سريع خلال 24 ساعة وتغليف الهدية جعلني أشعر بالفخامة. باكارات روج 540 أصبح عطري المفضل بلا منازع.\"",
        review2Author: "نورهان السيد",
        review2Location: "الإسكندرية، مصر",
        review3Text: "\"توم فورد عود وود قمة في الفخامة والوقار. تجربة الطلب كانت غاية في السلاسة والدعم راقٍ جداً.\"",
        review3Author: "كريم فوزي",
        review3Location: "الجيزة، مصر",
        vipEyebrow: "نادي كبار الشخصيات",
        vipTitle: "انضم لنادي النخبة للعطور الفاخرة",
        vipDesc: "اشترك لتصلك عروضنا الحصرية أولاً بأول، مع خصم 10% على طلبك القادم فور اشتراكك.",
        joinVipBtn: "انضم الآن ✨",
        verifyCode: "تأكيد الرمز",
        enterVerificationCode: "أدخل رمز التحقق",
        verificationDescription: "أدخل رمز التحقق الذي تم إرساله إلى بريدك الإلكتروني.",
        verificationCode: "رمز التحقق",
        verificationCodePlaceholder: "أدخل الرمز المكون من 6 أرقام",
        verifyCodeButton: "تأكيد الرمز",
        backToForgotPassword: "← رجوع",
        forgotPassword: "نسيت كلمة المرور؟",
        resetPassword: "إعادة تعيين كلمة المرور",
        forgotDescription: "أدخل بريدك الإلكتروني وسنرسل لك رابطًا لإعادة تعيين كلمة المرور.",
        emailPlaceholder: "أدخل بريدك الإلكتروني",
        sendResetEmail: "إرسال رابط إعادة التعيين",
        backToLogin: "← العودة إلى تسجيل الدخول",
        agreeTerms: "أوافق على",
        and: "و",
        orContinueWith: "أو التسجيل باستخدام",
        continueGoogle: "التسجيل باستخدام Google",
        continueFacebook: "التسجيل باستخدام Facebook",
        firstName: "الاسم الأول",
        lastName: "اسم العائلة",
        remove: "حذف",
        cardPaymentTitle: "الدفع بالبطاقة",
        cardPaymentMessage: "الدفع بالبطاقة سيكون متاحًا قريبًا.",
        privacyEyebrow: "خصوصيتك",
        privacyTitle: "سياسة الخصوصية",
        privacyDescription: "خصوصيتك مهمة بالنسبة لنا.",
        privacyDataTitle: "المعلومات التي نجمعها",
        privacyDataText: "قد نجمع معلومات مثل الاسم والبريد الإلكتروني ورقم الهاتف والعنوان وبيانات الطلب عند استخدام الموقع.",
        privacyUseTitle: "كيفية استخدام معلوماتك",
        privacyUseText: "نستخدم معلوماتك لتقديم خدماتنا ومعالجة الطلبات وتحسين تجربة التسوق والتواصل معك عند الحاجة.",
        privacyStorageTitle: "تخزين البيانات",
        privacyStorageText: "قد يستخدم الموقع التخزين المحلي للمتصفح لحفظ بيانات الحساب والسلة والمفضلة واللغة والطلبات.",
        privacySecurityTitle: "أمان البيانات",
        privacySecurityText: "نتخذ إجراءات معقولة لحماية المعلومات المستخدمة داخل الموقع، كما يجب على المستخدم الحفاظ على أمان بيانات حسابه.",
        privacy: "سياسة الخصوصية",
        termsEyebrow: "سياسات المتجر",
        termsTitle: "الشروط والأحكام",
        termsDescription: "يرجى قراءة الشروط قبل استخدام متجر العطور.",
        termsOrdersTitle: "الطلبات",
        termsOrdersText: "يتحمل العميل مسؤولية تقديم بيانات صحيحة عند إتمام الطلب، وتخضع الطلبات لتوفر المنتجات.",
        termsPricesTitle: "الأسعار والدفع",
        termsPricesText: "جميع الأسعار معروضة بالجنيه المصري، وتظهر طرق الدفع المتاحة أثناء إتمام الطلب.",
        termsCancellationTitle: "الإلغاء والاسترجاع",
        termsCancellationText: "يمكن إلغاء الطلبات وفقًا لسياسة الإلغاء والاسترجاع المعمول بها في المتجر.",
        termsResponsibilityTitle: "مسؤولية العميل",
        termsResponsibilityText: "يجب على العميل تقديم بيانات صحيحة للتواصل والتوصيل واستخدام الموقع بطريقة مسؤولة.",
        terms: "الشروط والأحكام",
        contact: "تواصل معنا",
        aboutTitle: "عن متجر العطور",
        aboutDescription: "اكتشف عطورًا صُممت لتعبّر عن شخصيتك وأسلوبك.",
        aboutWhoWeAre: "من نحن",
        aboutWhoWeAreText: "متجر العطور هو متجر عصري يقدم مجموعة مختارة بعناية من العطور التي تناسب مختلف الشخصيات والمناسبات.",
        aboutQuality: "جودتنا",
        aboutQualityText: "نهتم بالجودة والأناقة وتقديم تجربة تسوق ممتعة بداية من اكتشاف العطر وحتى استلام طلبك.",
        aboutMission: "مهمتنا",
        aboutMissionText: "مهمتنا أن نجعل العثور على عطرك المفضل أمرًا بسيطًا وممتعًا ومتاحًا للجميع.",
        aboutWhyUs: "لماذا تختارنا؟",
        aboutFeature1: "عطور مختارة بعناية",
        aboutFeature2: "تسوق سهل وبسيط",
        aboutFeature3: "تجربة طلب مريحة",
        aboutFeature4: "دعم يهتم بالعملاء",
        contactDescription: "هل لديك سؤال؟ يسعدنا أن نسمع منك.",
        contactInfoTitle: "معلومات التواصل",
        message: "الرسالة",
        sendMessage: "إرسال الرسالة",
        messageSent: "تم إرسال رسالتك بنجاح! ✉️",
        login: "تسجيل الدخول", logout: "تسجيل الخروج", register: "إنشاء حساب", welcome: "مرحبًا، ",
        search: "ابحث عن عطر...", allPrices: "كل الأسعار", low: "أقل من 3000 جنيه",
        medium: "من 3000 إلى 5000 جنيه", high: "أكثر من 5000 جنيه", ourPerfumes: "عطورنا",
        viewDetails: "التفاصيل", addToCart: "أضف للسلة", shoppingCart: "سلة المشتريات",
        emptyCart: "السلة فارغة 🛒", clearCart: "إفراغ السلة", checkout: "إتمام الطلب",
        total: "الإجمالي", checkoutTitle: "إتمام الطلب", fullName: "الاسم بالكامل", phone: "رقم الهاتف",
        address: "العنوان", payment: "طريقة الدفع", selectPayment: "اختر طريقة الدفع",
        cash: "الدفع عند الاستلام", card: "بطاقة ائتمان", placeOrder: "تأكيد الطلب",
        confirmed: "تم تأكيد الطلب ✅", thankYou: "شكرًا لطلبك!", continueShopping: "متابعة التسوق",
        noOrders: "لا توجد طلبات حتى الآن 📦", date: "التاريخ", orderNumber: "طلب رقم #",
        customer: "العميل", backProducts: "العودة للعطور", rate: "قيّم هذا العطر ⭐",
        reviewPlaceholder: "اكتب تقييمك...", submitReview: "إرسال التقييم", noReviews: "لا توجد تقييمات حتى الآن.",
        reviewSuccess: "تم إرسال التقييم بنجاح! ⭐", writeReview: "من فضلك اكتب تقييمك.",
        accountCreated: "تم إنشاء الحساب بنجاح!", noAccount: "ليس لديك حساب؟", alreadyAccount: "لديك حساب بالفعل؟",
        passwordsMismatch: "كلمتا المرور غير متطابقتين", noAccountFound: "لا يوجد حساب. أنشئ حسابًا أولًا.",
        wrongLogin: "البريد الإلكتروني أو كلمة المرور غير صحيحة", loginSuccess: "تم تسجيل الدخول بنجاح!",
        email: "البريد الإلكتروني", password: "كلمة المرور", confirmPassword: "تأكيد كلمة المرور", name: "الاسم",
        footer: "عطور فاخرة وأناقة لا تنتهي.", rights: "جميع الحقوق محفوظة.",
        filterTitle: "فلتر وترتيب",
        showFilters: "⚙️ الفلاتر",
        clearFilters: "مسح الكل",
        sortBy: "ترتيب حسب",
        sortDefault: "مميز",
        sortLowHigh: "السعر: الأقل أولاً",
        sortHighLow: "السعر: الأعلى أولاً",
        sortRating: "الأعلى تقييماً",
        sortReviews: "الأكثر تقييماً",
        familyLabel: "العائلة العطرية",
        familyAll: "جميع الفئات",
        familyFresh: "🌬️ منعش",
        familyWoody: "🌲 خشبي",
        familyFloral: "🌸 زهري",
        familyOriental: "🌙 شرقي / عود",
        familyAquatic: "🌊 مائي",
        familyFruity: "🍑 فاكهي",
        genderLabel: "مناسب لـ",
        genderAll: "الجميع",
        genderMen: "👔 رجالي",
        genderWomen: "👗 نسائي",
        genderUnisex: "⚧ يونيسكس",
        noResults: "لا توجد عطور تطابق الفلاتر المحددة.",
        scentFamily: "العائلة العطرية",
        topNotes: "النوتات الرئيسية",
        sillageLabel: "قوة الانتشار",
        sillageBeast: "🔥 وحشي",
        sillageStrong: "💪 قوي",
        sillageModerate: "✨ معتدل",
        sillageLight: "🌸 خفيف",
        similarTitle: "عطور مشابهة قد تعجبك",
        addToWishlist: "حفظ ❤️",
        removeFromWishlist: "محفوظ ❤️",
        reviewsCount: "تقييم",
        promoLabel: "كود الخصم",
        promoPlaceholder: "مثال: LUXURY10, ROYAL20...",
        applyPromo: "تطبيق",
        removePromo: "إزالة",
        promoSuccess: "تم تطبيق كود الخصم بنجاح!",
        promoInvalid: "كود الخصم غير صالح أو منتهي الصلاحية.",
        promoAlreadyApplied: "هذا الكود مطبق بالفعل.",
        promoRequired: "من فضلك أدخل كود الخصم.",
        orderSummary: "ملخص الطلب",
        subtotal: "المجموع الفرعي",
        discount: "الخصم",
        freeShipping: "توصيل مجاني",
        availablePromos: "أكواد متاحة:",
        printInvoice: "طباعة الفاتورة 🖨️",
        cancelOrder: "إلغاء الطلب",
        orderCancelled: "تم إلغاء الطلب بنجاح.",
        confirmCancelOrder: "هل أنت متأكد من رغبتك في إلغاء هذا الطلب؟",
        orderStatus: "حالة الشحنة",
        statusPending: "تم استلام الطلب 📝",
        statusPackaging: "جاري التجهيز والتغليف 🎁",
        statusInTransit: "في طريقها للتوصيل 🚚",
        statusDelivered: "تم التوصيل بنجاح ✨",
        statusCancelled: "ملغي ✕",
        verifiedBuyer: "مشتري مؤكد ✓",
        customerReviews: "تقييمات وآراء العملاء",
        ratingBreakdown: "توزيع التقييمات",
        rateThisFragrance: "قيّم هذا العطر",
        selectRating: "يرجى اختيار عدد النجوم أولاً!",
        yourName: "الاسم",
        writeYourReview: "شاركنا تجربتك ورأيك في ثبات وفوحان هذا العطر...",
        share: "مشاركة 📤",
        shareProduct: "مشاركة العطر",
        shareSuccess: "تم نسخ رابط العطر للمشاركة بنجاح! 🔗",
        deleteOrder: "حذف الطلب",
        confirmDeleteOrder: "هل أنت متأكد من رغبتك في حذف هذا الطلب نهائياً من السجل؟",
        orderDeleted: "تم حذف الطلب من السجل بنجاح 🗑️",
        clearAllOrders: "حذف جميع الطلبات",
        confirmClearAllOrders: "تحذير: هل أنت متأكد من رغبتك في حذف جميع الطلبات نهائياً من السجل؟ لا يمكن التراجع عن هذا الإجراء.",
        allOrdersCleared: "تم حذف جميع الطلبات بنجاح 🗑️",
        ordersCountText: "طلب في سجلك",
        deleteReview: "حذف التقييم",
        confirmDeleteReview: "هل أنت متأكد من رغبتك في حذف هذا التقييم؟",
        reviewDeleted: "تم حذف التقييم بنجاح 🗑️"
    }
};

// Global Luxury Share function (WhatsApp, LinkedIn, Copy Link)
function sharePerfume(id, name, price) {
    const existingModal = document.getElementById("luxuryShareModal");
    if (existingModal) existingModal.remove();

    const url = `${window.location.origin}/product-details.html?id=${id}`;
    const shareText = currentLanguage === "ar" 
        ? `اكتشف عطر ${name} الفاخر بسعر ${Number(price).toLocaleString()} ج.م من متجر Perfume Store! 🌟`
        : `Discover the luxury fragrance ${name} for ${Number(price).toLocaleString()} EGP at Perfume Store! 🌟`;

    const isAr = currentLanguage === "ar";

    const modal = document.createElement("div");
    modal.id = "luxuryShareModal";
    modal.className = "share-modal-backdrop";
    modal.innerHTML = `
        <div class="share-modal-box">
            <div class="share-modal-header">
                <h3>${isAr ? "مشاركة العطر الفاخر 📤" : "Share Luxury Fragrance 📤"}</h3>
                <button class="share-modal-close" id="shareModalCloseBtn">✕</button>
            </div>
            <p class="share-modal-sub">${name} — ${Number(price).toLocaleString()} EGP</p>
            <div class="share-options-grid">
                <a href="https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + '\n' + url)}" target="_blank" rel="noopener noreferrer" class="share-opt-btn whatsapp-share">
                    <span class="share-icon">💬</span>
                    <span>WhatsApp</span>
                </a>
                <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}" target="_blank" rel="noopener noreferrer" class="share-opt-btn linkedin-share">
                    <span class="share-icon">💼</span>
                    <span>LinkedIn</span>
                </a>
                <button class="share-opt-btn copy-share" id="copyShareLinkBtn">
                    <span class="share-icon">🔗</span>
                    <span>${isAr ? "نسخ الرابط" : "Copy Link"}</span>
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.remove();
    });

    const closeBtn = modal.querySelector("#shareModalCloseBtn");
    if (closeBtn) {
        closeBtn.addEventListener("click", () => modal.remove());
    }

    const copyBtn = modal.querySelector("#copyShareLinkBtn");
    if (copyBtn) {
        copyBtn.addEventListener("click", () => {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(url).then(() => {
                    showNotification(t("shareSuccess"));
                    modal.remove();
                }).catch(() => {
                    showNotification(t("shareSuccess"));
                    modal.remove();
                });
            } else {
                showNotification(t("shareSuccess"));
                modal.remove();
            }
        });
    }
}

const t = key => (translations[currentLanguage] && translations[currentLanguage][key]) ? translations[currentLanguage][key] : key;

// ================= NOTIFICATION =================

function showNotification(message, type = "success") {

    const oldNotification =
        document.querySelector(".custom-notification");

    if (oldNotification) {
        oldNotification.remove();
    }

    const notification =
        document.createElement("div");

    notification.className =
        `custom-notification ${type}`;

    notification.innerHTML = `
        <span class="notification-icon">
            ${type === "success" ? "✓" : "!"}
        </span>

        <span class="notification-message">
            ${message}
        </span>

        <button class="notification-close">
            ×
        </button>
    `;

    document.body.appendChild(notification);

    requestAnimationFrame(() => {
        notification.classList.add("show");
    });

    notification
        .querySelector(".notification-close")
        .addEventListener("click", () => {
            notification.classList.remove("show");

            setTimeout(() => {
                notification.remove();
            }, 300);
        });

    setTimeout(() => {

        if (!notification.isConnected) return;

        notification.classList.remove("show");

        setTimeout(() => {
            notification.remove();
        }, 300);

    }, 3000);
}
function setLanguage(language) {
    currentLanguage = language === "ar" ? "ar" : "en";

    localStorage.setItem("language", currentLanguage);

    document.documentElement.lang = currentLanguage;
    document.documentElement.dir =
        currentLanguage === "ar" ? "rtl" : "ltr";

    renderLayout();
    refreshPageText();

    if (typeof displayProducts === "function" && productsContainer) {
        displayProducts(perfumes);
    }

    if (typeof displayCart === "function" && cartContainer) {
        displayCart();
    }

    if (typeof displayOrders === "function") {
        displayOrders();
    }

    if (typeof renderHomeSections === "function") {
        renderHomeSections();
    }

    if (typeof renderCheckoutSummary === "function") {
        renderCheckoutSummary();
    }

    if (typeof displayOrderDetails === "function") {
        displayOrderDetails();
    }

    updateNavBadges();
}

function getCurrentPage() {
    const file = window.location.pathname.split("/").pop();
    return file || "index.html";
}

async function updateNavBadges() {
    let currentCart = [];
    if (typeof window.getUserCart === "function") {
        try {
            currentCart = await window.getUserCart();
        } catch (e) {
            currentCart = JSON.parse(localStorage.getItem("cart")) || [];
        }
    } else {
        currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    }

    let currentWishlist = [];
    if (typeof window.getUserWishlist === "function") {
        try {
            currentWishlist = await window.getUserWishlist();
        } catch (e) {
            currentWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        }
    } else {
        currentWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    }

    const cartCount = currentCart.length;
    const wishCount = currentWishlist.length;

    document.querySelectorAll(".cart-badge").forEach(badge => {
        badge.textContent = cartCount;
        badge.style.display = cartCount > 0 ? "inline-flex" : "none";
        badge.classList.add("pop");
        setTimeout(() => badge.classList.remove("pop"), 250);
    });

    document.querySelectorAll(".wishlist-badge").forEach(badge => {
        badge.textContent = wishCount;
        badge.style.display = wishCount > 0 ? "inline-flex" : "none";
        badge.classList.add("pop");
        setTimeout(() => badge.classList.remove("pop"), 250);
    });
}

function renderLayout() {
    const page = getCurrentPage();
    const authPage = ["login.html", "register.html", "forgot-password.html", "verify-code.html"].includes(page);

    const header = document.getElementById("siteHeader");
    const footer = document.getElementById("siteFooter");

    if (header) {
        const savedUser = JSON.parse(localStorage.getItem("user"));
        const loggedIn = localStorage.getItem("isLoggedIn") === "true";

        header.innerHTML = `
            <nav class="site-nav ${authPage ? "auth-nav" : ""}">
                <a class="brand" href="index.html">Perfume <span>Store</span></a>
                ${!authPage ? `
                    <div class="nav-links">
                        <a href="index.html" class="${page === "index.html" ? "active" : ""}">${t("home")}</a>
                        <a href="products.html" class="${page === "products.html" ? "active" : ""}">${t("products")}</a>
                        <a href="wishlist.html" class="${page === "wishlist.html" ? "active" : ""}">
                            ${t("wishlist")} <span class="nav-badge wishlist-badge" style="display:none;">0</span>
                        </a>
                        <a href="cart.html" class="${page === "cart.html" ? "active" : ""}">
                            ${t("cart")} <span class="nav-badge cart-badge" style="display:none;">0</span>
                        </a>
                        <a href="order-history.html" class="${page === "order-history.html" ? "active" : ""}">${t("orders")}</a>
                        <a href="profile.html" class="${page === "profile.html" ? "active" : ""}">${t("profile")}</a>  
                        <a href="about.html" class="${page === "about.html" ? "active" : ""}">${t("about")}</a>
                        <a href="contact.html" class="${page === "contact.html" ? "active" : ""}">${t("contactTitle")}</a>    
                    </div>
                    <div class="nav-actions">
                        ${savedUser && loggedIn ? `<span class="user-name">${t("welcome")}${savedUser.name}</span>` : ""}
                        <button class="language-btn ${currentLanguage === "en" ? "active" : ""}" data-lang="en">EN</button>
                        <button class="language-btn ${currentLanguage === "ar" ? "active" : ""}" data-lang="ar">ع</button>
                        ${loggedIn ? `<button id="logoutButton" class="outline-btn">${t("logout")}</button>` : `<a class="outline-btn" href="login.html">${t("login")}</a>`}
                        <button class="hamburger-btn" id="drawerToggle" aria-label="Menu">☰</button>
                    </div>
                ` : `
                    <div class="nav-actions">
                        <button class="language-btn ${currentLanguage === "en" ? "active" : ""}" data-lang="en">EN</button>
                        <button class="language-btn ${currentLanguage === "ar" ? "active" : ""}" data-lang="ar">ع</button>
                    </div>
                `}
            </nav>

            ${!authPage ? `
                <!-- MOBILE DRAWER OVERLAY & PANEL -->
                <div class="mobile-drawer-overlay" id="drawerOverlay"></div>
                <div class="mobile-drawer" id="mobileDrawer">
                    <div class="drawer-header">
                        <a class="brand" href="index.html">Perfume <span>Store</span></a>
                        <button class="drawer-close" id="drawerClose">✕</button>
                    </div>
                    <div class="drawer-links">
                        <a href="index.html"><span>🏠 ${t("home")}</span></a>
                        <a href="products.html"><span>✨ ${t("products")}</span></a>
                        <a href="wishlist.html"><span>❤️ ${t("wishlist")}</span> <span class="nav-badge wishlist-badge" style="display:none;">0</span></a>
                        <a href="cart.html"><span>🛒 ${t("cart")}</span> <span class="nav-badge cart-badge" style="display:none;">0</span></a>
                        <a href="order-history.html"><span>📦 ${t("orders")}</span></a>
                        <a href="profile.html"><span>👤 ${t("profile")}</span></a>
                        <a href="about.html"><span>🌹 ${t("about")}</span></a>
                        <a href="contact.html"><span>✉️ ${t("contactTitle")}</span></a>
                        <a href="privacy.html"><span>🔒 ${t("privacy")}</span></a>
                        <a href="terms.html"><span>📜 ${t("terms")}</span></a>
                    </div>
                    <div class="drawer-actions">
                        ${savedUser && loggedIn ? `<span class="user-name" style="text-align:center;">${t("welcome")}${savedUser.name}</span>` : ""}
                        <div style="display:flex; gap:8px; justify-content:center;">
                            <button class="language-btn ${currentLanguage === "en" ? "active" : ""}" data-lang="en">EN</button>
                            <button class="language-btn ${currentLanguage === "ar" ? "active" : ""}" data-lang="ar">ع</button>
                        </div>
                        ${loggedIn ? `<button id="drawerLogout" class="outline-btn" style="width:100%;">${t("logout")}</button>` : `<a class="outline-btn" href="login.html" style="width:100%; text-align:center;">${t("login")}</a>`}
                    </div>
                </div>

                <!-- MOBILE BOTTOM NAV -->
                <nav class="bottom-nav">
                    <a href="index.html" class="bottom-nav-item ${page === "index.html" ? "active" : ""}">
                        <span class="icon">🏠</span>
                        <span>${t("home")}</span>
                    </a>
                    <a href="products.html" class="bottom-nav-item ${page === "products.html" ? "active" : ""}">
                        <span class="icon">✨</span>
                        <span>${t("products")}</span>
                    </a>
                    <a href="wishlist.html" class="bottom-nav-item ${page === "wishlist.html" ? "active" : ""}">
                        <span class="icon">❤️</span>
                        <span>${t("wishlist")}</span>
                        <span class="nav-badge wishlist-badge" style="display:none;">0</span>
                    </a>
                    <a href="cart.html" class="bottom-nav-item ${page === "cart.html" ? "active" : ""}">
                        <span class="icon">🛒</span>
                        <span>${t("cart")}</span>
                        <span class="nav-badge cart-badge" style="display:none;">0</span>
                    </a>
                    <a href="${loggedIn ? "profile.html" : "login.html"}" class="bottom-nav-item ${["profile.html", "login.html"].includes(page) ? "active" : ""}">
                        <span class="icon">👤</span>
                        <span>${loggedIn ? t("profile") : t("login")}</span>
                    </a>
                </nav>
            ` : ""}
        `;

        header.querySelectorAll("[data-lang]").forEach(btn => {
            btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
        });

        const drawerToggle = document.getElementById("drawerToggle");
        const drawerClose = document.getElementById("drawerClose");
        const drawerOverlay = document.getElementById("drawerOverlay");
        const mobileDrawer = document.getElementById("mobileDrawer");

        if (drawerToggle && mobileDrawer && drawerOverlay) {
            const openDrawer = () => {
                mobileDrawer.classList.add("active");
                drawerOverlay.classList.add("active");
            };
            const closeDrawer = () => {
                mobileDrawer.classList.remove("active");
                drawerOverlay.classList.remove("active");
            };

            drawerToggle.addEventListener("click", openDrawer);
            if (drawerClose) drawerClose.addEventListener("click", closeDrawer);
            drawerOverlay.addEventListener("click", closeDrawer);
        }

        const drawerLogout = document.getElementById("drawerLogout");
        if (drawerLogout) {
            drawerLogout.addEventListener("click", () => {
                const mainLogout = document.getElementById("logoutButton");
                if (mainLogout) mainLogout.click();
                else {
                    localStorage.removeItem("isLoggedIn");
                    localStorage.removeItem("user");
                    window.location.href = "login.html";
                }
            });
        }
    }

    if (footer) {
        footer.innerHTML = `
            <footer class="site-footer">
                <div>
                    <a class="brand" href="index.html">Perfume <span>Store</span></a>
                    <p>${t("footer")}</p>
                </div>
                <div style="display:flex; gap:16px; flex-wrap:wrap; font-size:13px;">
                    <a href="privacy.html">${t("privacy")}</a>
                    <a href="terms.html">${t("terms")}</a>
                    <a href="contact.html">${t("contactTitle")}</a>
                    <a href="about.html">${t("about")}</a>
                </div>
                <p>© ${new Date().getFullYear()} Perfume Store — ${t("rights")}</p>
            </footer>
        `;
    }

    updateNavBadges();
}

function refreshPageText() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        el.placeholder = t(el.dataset.i18nPlaceholder);
    });
    document.querySelectorAll("[data-i18n-title]").forEach(el => {
        el.title = t(el.dataset.i18nTitle);
    });
}

// ================= HOME SECTIONS LOGIC =================
async function renderHomeSections() {
    const bestSellersContainer = document.getElementById("bestSellersContainer");
    if (bestSellersContainer) {
        const bestSellerIds = [1, 2, 11, 10];
        const bestSellers = perfumes.filter(p => bestSellerIds.includes(p.id));

        let wishlist = [];
        if (typeof window.getUserWishlist === "function") {
            try {
                wishlist = await window.getUserWishlist();
            } catch (e) {
                wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
            }
        } else {
            wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        }

        bestSellersContainer.innerHTML = bestSellers.map(perfume => {
            const isFav = wishlist.some(p => p && p.id === perfume.id);
            return `
                <article class="product-card">
                    <img src="./images/${perfume.image}" alt="${perfume.name}" loading="lazy">
                    <div class="product-card-body">
                        <h3>${perfume.name}</h3>
                        <p class="price">${perfume.price} EGP</p>
                        <div class="product-actions">
                            <a class="view-product primary-link" href="product-details.html?id=${perfume.id}" style="text-align:center; padding:11px 15px;">${t("viewDetails")}</a>
                            <button class="wishlist-button home-wishlist" data-id="${perfume.id}">${isFav ? "♥" : "♡"}</button>
                            <button class="add-to-cart home-add-cart secondary-btn" data-id="${perfume.id}">${t("addToCart")}</button>
                        </div>
                    </div>
                </article>
            `;
        }).join("");

        bestSellersContainer.querySelectorAll(".home-add-cart").forEach(button => {
            button.addEventListener("click", async () => {
                const product = perfumes.find(p => p.id === Number(button.dataset.id));
                await window.firebaseReady;

                let userCart = [];
                if (typeof window.getUserCart === "function") {
                    userCart = await window.getUserCart();
                } else {
                    userCart = JSON.parse(localStorage.getItem("cart")) || [];
                }

                userCart.push(product);

                if (typeof window.saveUserCart === "function") {
                    await window.saveUserCart(userCart);
                } else {
                    localStorage.setItem("cart", JSON.stringify(userCart));
                }

                showNotification(`${product.name} ${t("addedToCart")}`);
                updateNavBadges();
            });
        });

        bestSellersContainer.querySelectorAll(".home-wishlist").forEach(button => {
            button.addEventListener("click", async () => {
                const productId = Number(button.dataset.id);
                let currentWishlist = [];
                if (typeof window.getUserWishlist === "function") {
                    currentWishlist = await window.getUserWishlist();
                } else {
                    currentWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
                }

                const exists = currentWishlist.some(p => p && p.id === productId);
                if (exists) {
                    currentWishlist = currentWishlist.filter(p => p && p.id !== productId);
                    button.textContent = "♡";
                } else {
                    const product = perfumes.find(p => p.id === productId);
                    if (product) currentWishlist.push(product);
                    button.textContent = "♥";
                }

                if (typeof window.saveUserWishlist === "function") {
                    await window.saveUserWishlist(currentWishlist);
                } else {
                    localStorage.setItem("wishlist", JSON.stringify(currentWishlist));
                }

                updateNavBadges();
            });
        });
    }

    const spotlightBtn = document.querySelector(".add-spotlight-cart");
    if (spotlightBtn) {
        spotlightBtn.addEventListener("click", async () => {
            const product = perfumes.find(p => p.id === 11);
            if (!product) return;

            await window.firebaseReady;
            let userCart = [];
            if (typeof window.getUserCart === "function") {
                userCart = await window.getUserCart();
            } else {
                userCart = JSON.parse(localStorage.getItem("cart")) || [];
            }

            userCart.push(product);

            if (typeof window.saveUserCart === "function") {
                await window.saveUserCart(userCart);
            } else {
                localStorage.setItem("cart", JSON.stringify(userCart));
            }

            showNotification(`${product.name} ${t("addedToCart")}`);
            updateNavBadges();
        });
    }

    const vipForm = document.getElementById("vipForm");
    if (vipForm) {
        vipForm.addEventListener("submit", (e) => {
            e.preventDefault();
            showNotification(currentLanguage === "ar" ? "أهلاً بك في نادي كبار الشخصيات! تم إرسال كود خصم 10% إلى بريدك ✨" : "Welcome to the VIP Society! 10% discount code sent to your email ✨", "success");
            vipForm.reset();
        });
    }
}


// ================= PRODUCTS =================
const productsContainer = document.querySelector(".products-container");
if (productsContainer) {

    // ---- helpers ----
    function getFamilyLabel(family) {
        const map = { fresh: t("familyFresh"), woody: t("familyWoody"), floral: t("familyFloral"), oriental: t("familyOriental"), aquatic: t("familyAquatic"), fruity: t("familyFruity") };
        return map[family] || family;
    }
    function getSillageLabel(sillage) {
        const map = { beast: t("sillageBeast"), strong: t("sillageStrong"), moderate: t("sillageModerate"), light: t("sillageLight") };
        return map[sillage] || sillage;
    }
    function getFamilyColor(family) {
        const map = { fresh: "#4fc3f7", woody: "#a1887f", floral: "#f48fb1", oriental: "#ce93d8", aquatic: "#4dd0e1", fruity: "#ffb74d" };
        return map[family] || "var(--gold2)";
    }
    function renderStars(rating) {
        const full = Math.floor(rating);
        const half = rating - full >= 0.5 ? 1 : 0;
        const empty = 5 - full - half;
        return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(empty);
    }
    function getAverageRating(perfumeId) {
        const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
        const pReviews = reviews.filter(r => r.productId === perfumeId && r.rating > 0);
        if (pReviews.length) {
            const avg = pReviews.reduce((s, r) => s + r.rating, 0) / pReviews.length;
            return { avg: Math.round(avg * 10) / 10, count: pReviews.length };
        }
        return null;
    }

    function renderProductSkeletons(count = 8) {
        productsContainer.innerHTML = Array.from({ length: count }).map(() => `
            <div class="skeleton-card">
                <div class="skeleton-img skeleton-shimmer"></div>
                <div class="skeleton-body">
                    <div class="skeleton-line short skeleton-shimmer"></div>
                    <div class="skeleton-line title skeleton-shimmer"></div>
                    <div class="skeleton-line medium skeleton-shimmer"></div>
                    <div class="skeleton-line btn skeleton-shimmer"></div>
                </div>
            </div>
        `).join("");
    }

    function displayProducts(products) {
        productsContainer.innerHTML = "";

        // update result count badge
        const resultCountEl = document.getElementById("resultCount");
        if (resultCountEl) resultCountEl.textContent = products.length;

        if (!products.length) {
            productsContainer.innerHTML = `<div class="empty-state" style="grid-column:1/-1;">
                <div style="font-size:48px;margin-bottom:16px;">🔍</div>
                <h3 style="color:var(--gold2);margin-bottom:8px;">${t("noResults")}</h3>
                <p style="color:var(--muted);">${currentLanguage === "ar" ? "جرّب تعديل الفلاتر أو البحث بكلمات أخرى." : "Try adjusting your filters or search terms."}</p>
                <button id="clearFiltersEmpty" class="primary-link" style="margin-top:18px;border:none;cursor:pointer;">${t("clearFilters")}</button>
            </div>`;
            const clearBtn = document.getElementById("clearFiltersEmpty");
            if (clearBtn) clearBtn.addEventListener("click", clearAllFilters);
            return;
        }

        // Fast instant synchronous read from localStorage - 0ms delay!
        let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

        // Background sync with Firebase without blocking rendering
        if (typeof window.getUserWishlist === "function") {
            window.getUserWishlist().then(remoteWl => {
                if (remoteWl && Array.isArray(remoteWl)) {
                    wishlist = remoteWl;
                    document.querySelectorAll(".wishlist-button").forEach(btn => {
                        const pid = Number(btn.dataset.id);
                        const isFav = wishlist.some(p => p && p.id === pid);
                        btn.textContent = isFav ? "♥" : "♡";
                        btn.classList.toggle("active", isFav);
                    });
                }
            }).catch(() => {});
        }

        products.forEach(perfume => {
            const isFav = wishlist.some(p => p && p.id === perfume.id);
            const localRating = getAverageRating(perfume.id);
            const displayRating = localRating ? localRating.avg : perfume.rating;
            const displayCount = localRating ? localRating.count : perfume.reviewCount;
            const familyColor = getFamilyColor(perfume.family);

            productsContainer.innerHTML += `
                <article class="product-card" data-id="${perfume.id}">
                    <div class="product-card-img-wrap">
                        <img src="./images/${perfume.image}" alt="${perfume.name}" loading="lazy">
                        <span class="product-family-badge" style="--badge-color:${familyColor};">${getFamilyLabel(perfume.family)}</span>
                        <button class="wishlist-button card-wishlist-btn${isFav ? " active" : ""}" data-id="${perfume.id}" title="${isFav ? t("removeFromWishlist") : t("addToWishlist")}">
                            ${isFav ? "♥" : "♡"}
                        </button>
                    </div>
                    <div class="product-card-body">
                        <div class="card-rating">
                            <span class="card-stars">${renderStars(displayRating)}</span>
                            <span class="card-rating-num">${displayRating}</span>
                            <span class="card-review-count">(${displayCount} ${t("reviewsCount")})</span>
                        </div>
                        <h3>${perfume.name}</h3>
                        <p class="card-sillage">${getSillageLabel(perfume.sillage)}</p>
                        <p class="price">${perfume.price.toLocaleString()} EGP</p>
                        <div class="product-actions">
                            <button class="view-product primary-link" data-id="${perfume.id}" style="flex:1;text-align:center;">${t("viewDetails")}</button>
                            <button class="share-product secondary-btn" data-id="${perfume.id}" data-name="${perfume.name}" data-price="${perfume.price}" title="${t("share")}">📤</button>
                            <button class="add-to-cart secondary-btn" data-id="${perfume.id}">🛒</button>
                        </div>
                    </div>
                </article>`;
        });

        // share-product handlers
        document.querySelectorAll(".share-product").forEach(button => {
            button.addEventListener("click", (e) => {
                e.stopPropagation();
                const id = button.dataset.id;
                const name = button.dataset.name;
                const price = Number(button.dataset.price);
                sharePerfume(id, name, price);
            });
        });

        // add-to-cart handlers
        document.querySelectorAll(".add-to-cart").forEach(button => {
            button.addEventListener("click", async () => {
                const product = perfumes.find(p => p.id === Number(button.dataset.id));
                await window.firebaseReady;
                if (typeof window.getUserCart === "function") {
                    cart = await window.getUserCart();
                } else {
                    cart = JSON.parse(localStorage.getItem("cart")) || [];
                }
                cart.push(product);
                if (typeof window.saveUserCart === "function") {
                    await window.saveUserCart(cart);
                } else {
                    localStorage.setItem("cart", JSON.stringify(cart));
                }
                showNotification(`${product.name} ${t("addedToCart")}`);
                updateNavBadges();
            });
        });

        // view-product handlers
        document.querySelectorAll(".view-product").forEach(button => {
            button.addEventListener("click", () => {
                const id = button.dataset.id;
                localStorage.setItem("selectedProduct", id);
                window.location.href = `product-details.html?id=${id}`;
            });
        });

        // wishlist handlers
        document.querySelectorAll(".wishlist-button").forEach(button => {
            const productId = Number(button.dataset.id);
            button.addEventListener("click", async function () {
                if (typeof window.getUserWishlist === "function") {
                    wishlist = await window.getUserWishlist();
                } else {
                    wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
                }
                const exists = wishlist.some(p => p && p.id === productId);
                if (exists) {
                    wishlist = wishlist.filter(p => p && p.id !== productId);
                    button.textContent = "♡";
                    button.classList.remove("active");
                } else {
                    const product = perfumes.find(p => p.id === productId);
                    if (product) { wishlist.push(product); }
                    button.textContent = "♥";
                    button.classList.add("active");
                }
                if (typeof window.saveUserWishlist === "function") {
                    await window.saveUserWishlist(wishlist);
                } else {
                    localStorage.setItem("wishlist", JSON.stringify(wishlist));
                }
                updateNavBadges();
            });
        });
    }

    // ---- filter + sort logic ----
    function clearAllFilters() {
        const searchInput = document.getElementById("searchInput");
        const familyFilter = document.getElementById("familyFilter");
        const genderFilter = document.getElementById("genderFilter");
        const sortFilter = document.getElementById("sortFilter");
        const priceFilter = document.getElementById("priceFilter");
        if (searchInput) searchInput.value = "";
        if (familyFilter) familyFilter.value = "all";
        if (genderFilter) genderFilter.value = "all";
        if (sortFilter) sortFilter.value = "default";
        if (priceFilter) priceFilter.value = "all";
        displayProducts(perfumes);
    }

    function filterProducts() {
        const searchVal = (document.getElementById("searchInput")?.value || "").toLowerCase();
        const priceVal = document.getElementById("priceFilter")?.value || "all";
        const familyVal = document.getElementById("familyFilter")?.value || "all";
        const genderVal = document.getElementById("genderFilter")?.value || "all";
        const sortVal = document.getElementById("sortFilter")?.value || "default";

        let results = perfumes.filter(p => {
            const matchSearch = p.name.toLowerCase().includes(searchVal) || (p.notes && p.notes.toLowerCase().includes(searchVal));
            const matchPrice = priceVal === "all" || (priceVal === "low" && p.price < 3000) || (priceVal === "medium" && p.price >= 3000 && p.price <= 5000) || (priceVal === "high" && p.price > 5000);
            const matchFamily = familyVal === "all" || p.family === familyVal;
            const matchGender = genderVal === "all" || p.gender === genderVal;
            return matchSearch && matchPrice && matchFamily && matchGender;
        });

        if (sortVal === "low-high") results.sort((a, b) => a.price - b.price);
        else if (sortVal === "high-low") results.sort((a, b) => b.price - a.price);
        else if (sortVal === "rating") results.sort((a, b) => b.rating - a.rating);
        else if (sortVal === "reviews") results.sort((a, b) => b.reviewCount - a.reviewCount);

        displayProducts(results);
    }

    displayProducts(perfumes);

    ["searchInput", "priceFilter", "familyFilter", "genderFilter", "sortFilter"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener(id === "searchInput" ? "input" : "change", filterProducts);
    });

    const clearFiltersBtn = document.getElementById("clearFiltersBtn");
    if (clearFiltersBtn) clearFiltersBtn.addEventListener("click", clearAllFilters);
}

// ================= PRODUCT DETAILS =================
const detailsContainer = document.querySelector(".details-container");
if (detailsContainer) {
    const urlParams = new URLSearchParams(window.location.search);
    const queryId = urlParams.get("id");
    const selectedId = queryId ? Number(queryId) : Number(localStorage.getItem("selectedProduct"));
    const product = perfumes.find(p => p.id === selectedId);

    if (product) {
        localStorage.setItem("selectedProduct", product.id);
        let savedUser = null;
        try {
            savedUser = JSON.parse(localStorage.getItem("user"));
        } catch(e) {}

        const familyColors = { fresh: "#4fc3f7", woody: "#a1887f", floral: "#f48fb1", oriental: "#ce93d8", aquatic: "#4dd0e1", fruity: "#ffb74d" };
        const familyLabels = { fresh: t("familyFresh"), woody: t("familyWoody"), floral: t("familyFloral"), oriental: t("familyOriental"), aquatic: t("familyAquatic"), fruity: t("familyFruity") };
        const sillageLabels = { beast: t("sillageBeast"), strong: t("sillageStrong"), moderate: t("sillageModerate"), light: t("sillageLight") };
        const genderLabels = { men: t("genderMen"), women: t("genderWomen"), unisex: t("genderUnisex") };

        const badgeColor = familyColors[product.family] || "var(--gold2)";
        const familyLabel = familyLabels[product.family] || product.family;
        const sillageLabel = sillageLabels[product.sillage] || product.sillage;
        const genderLabel = genderLabels[product.gender] || product.gender;

        // similar perfumes (same family, different id, max 3)
        const similar = perfumes.filter(p => p.family === product.family && p.id !== product.id).slice(0, 3);

        detailsContainer.innerHTML = `
            <div class="product-details-card">
                <div class="details-img-wrap">
                    <img src="./images/${product.image}" alt="${product.name}">
                    <span class="product-family-badge" style="--badge-color:${badgeColor}; position:absolute; top:16px; bottom:auto; left:16px; height:max-content;">${familyLabel}</span>
                </div>
                <div class="product-info">
                    <span class="eyebrow">Premium Fragrance</span>
                    <h2>${product.name}</h2>

                    <div class="details-rating-row">
                        <span class="details-stars">${"★".repeat(Math.floor(product.rating))}${ product.rating % 1 >= 0.5 ? "½" : "" }</span>
                        <span class="details-rating-num">${product.rating}</span>
                        <span class="details-review-count">(${product.reviewCount} ${t("reviewsCount")})</span>
                    </div>

                    <h3 class="details-price">${product.price.toLocaleString()} EGP</h3>
                    <p class="details-description">${product.description}</p>

                    <!-- Metadata chips -->
                    <div class="details-meta-grid">
                        <div class="meta-chip">
                            <span class="meta-chip-label">${t("scentFamily")}</span>
                            <span class="meta-chip-value" style="color:${badgeColor};">${familyLabel}</span>
                        </div>
                        <div class="meta-chip">
                            <span class="meta-chip-label">${t("sillageLabel")}</span>
                            <span class="meta-chip-value">${sillageLabel}</span>
                        </div>
                        <div class="meta-chip">
                            <span class="meta-chip-label">${t("genderLabel")}</span>
                            <span class="meta-chip-value">${genderLabel}</span>
                        </div>
                    </div>

                    <!-- Notes -->
                    ${product.notes ? `
                    <div class="details-notes">
                        <span class="meta-chip-label">${t("topNotes")}</span>
                        <div class="notes-tags">
                            ${product.notes.split(",").map(n => `<span class="note-tag">${n.trim()}</span>`).join("")}
                        </div>
                    </div>` : ""}

                    <!-- Actions -->
                    <div class="quantity">
                        <button id="minus">−</button><span id="quantity">1</span><button id="plus">+</button>
                    </div>
                    <div class="details-action-row">
                        <button class="add-details-cart primary-link" style="flex:1; border:none; cursor:pointer;">${t("addToCart")} 🛒</button>
                        <button class="details-wishlist-btn" id="detailsWishlistBtn" title="${t("addToWishlist")}">♡</button>
                        <button class="details-share-btn" id="detailsShareBtn" title="${t("share")}">📤</button>
                    </div>

                    <!-- Reviews & Ratings Section -->
                    <div class="review-section">
                        <div class="review-section-header">
                            <h3>${t("customerReviews")}</h3>
                            <span class="reviews-total-badge" id="reviewsBadgeCount">0 ${t("reviewsCount")}</span>
                        </div>

                        <!-- Summary Dashboard (Score + Breakdown Bars) -->
                        <div class="review-dashboard" id="reviewDashboard"></div>

                        <!-- Interactive Review Form -->
                        <div class="review-form-card">
                            <h4>${t("rateThisFragrance")}</h4>
                            <div class="rating-stars-interactive" id="starPicker">
                                <span class="interactive-star" data-rating="1">★</span>
                                <span class="interactive-star" data-rating="2">★</span>
                                <span class="interactive-star" data-rating="3">★</span>
                                <span class="interactive-star" data-rating="4">★</span>
                                <span class="interactive-star" data-rating="5">★</span>
                                <span class="rating-feedback-text" id="ratingFeedbackText">0 / 5</span>
                            </div>
                            <input type="hidden" id="rating" value="0">
                            ${!savedUser ? `
                                <input type="text" id="reviewAuthorName" placeholder="${t("yourName")}" class="review-name-input">
                            ` : ""}
                            <textarea id="reviewText" placeholder="${t("writeYourReview")}" rows="3"></textarea>
                            <button id="submitReview" class="submit-review-btn">${t("submitReview")} ⭐</button>
                        </div>

                        <!-- Reviews List -->
                        <div id="reviewsContainer" class="reviews-list"></div>
                    </div>
                    <a class="back-link" href="products.html">← ${t("backProducts")}</a>
                </div>
            </div>

            ${similar.length ? `
            <section class="similar-section">
                <div class="section-header" style="text-align:center; margin-bottom:32px;">
                    <span class="eyebrow">${t("similarTitle")}</span>
                    <h2 style="font-size:clamp(26px,4vw,38px);">${t("similarTitle")}</h2>
                </div>
                <div class="similar-grid">
                    ${similar.map(s => `
                    <article class="product-card">
                        <div class="product-card-img-wrap">
                            <img src="./images/${s.image}" alt="${s.name}" loading="lazy">
                            <span class="product-family-badge" style="--badge-color:${familyColors[s.family] || "var(--gold2)"};">${familyLabels[s.family] || s.family}</span>
                        </div>
                        <div class="product-card-body">
                            <div class="card-rating">
                                <span class="card-stars">${"★".repeat(Math.floor(s.rating))}</span>
                                <span class="card-rating-num">${s.rating}</span>
                            </div>
                            <h3>${s.name}</h3>
                            <p class="price">${s.price.toLocaleString()} EGP</p>
                            <div class="product-actions">
                                <a class="primary-link view-product" href="product-details.html?id=${s.id}" style="flex:1; text-align:center;">${t("viewDetails")}</a>
                            </div>
                        </div>
                    </article>`).join("")}
                </div>
            </section>` : ""}
        `;

        // Quantity controls
        let quantity = 1;
        const quantityElement = document.getElementById("quantity");
        document.getElementById("plus").addEventListener("click", () => { quantity++; quantityElement.textContent = quantity; });
        document.getElementById("minus").addEventListener("click", () => { if (quantity > 1) quantity--; quantityElement.textContent = quantity; });

        // Add to cart
        document.querySelector(".add-details-cart").addEventListener("click", async () => {
            await window.firebaseReady;
            if (typeof window.getUserCart === "function") { cart = await window.getUserCart(); } else { cart = JSON.parse(localStorage.getItem("cart")) || []; }
            for (let i = 0; i < quantity; i++) { cart.push(product); }
            if (typeof window.saveUserCart === "function") { await window.saveUserCart(cart); } else { localStorage.setItem("cart", JSON.stringify(cart)); }
            showNotification(`${product.name} ${t("addedToCart")}`);
            updateNavBadges();
        });

        // Wishlist button
        const wishlistBtn = document.getElementById("detailsWishlistBtn");
        async function initDetailsWishlist() {
            let wl = [];
            if (typeof window.getUserWishlist === "function") { try { wl = await window.getUserWishlist(); } catch (e) { wl = JSON.parse(localStorage.getItem("wishlist")) || []; } } else { wl = JSON.parse(localStorage.getItem("wishlist")) || []; }
            const isFav = wl.some(p => p && p.id === product.id);
            wishlistBtn.textContent = isFav ? "♥" : "♡";
            wishlistBtn.classList.toggle("active", isFav);
        }
        if (wishlistBtn) {
            initDetailsWishlist();
            wishlistBtn.addEventListener("click", async () => {
                let wl = [];
                if (typeof window.getUserWishlist === "function") { try { wl = await window.getUserWishlist(); } catch (e) { wl = JSON.parse(localStorage.getItem("wishlist")) || []; } } else { wl = JSON.parse(localStorage.getItem("wishlist")) || []; }
                const exists = wl.some(p => p && p.id === product.id);
                if (exists) { wl = wl.filter(p => p && p.id !== product.id); wishlistBtn.textContent = "♡"; wishlistBtn.classList.remove("active"); }
                else { wl.push(product); wishlistBtn.textContent = "♥"; wishlistBtn.classList.add("active"); }
                if (typeof window.saveUserWishlist === "function") { await window.saveUserWishlist(wl); } else { localStorage.setItem("wishlist", JSON.stringify(wl)); }
                updateNavBadges();
            });
        }

        // Share button
        const detailsShareBtn = document.getElementById("detailsShareBtn");
        if (detailsShareBtn) {
            detailsShareBtn.addEventListener("click", () => {
                sharePerfume(product.id, product.name, product.price);
            });
        }

        // ================= INTERACTIVE REVIEWS =================
        const stars = document.querySelectorAll(".interactive-star");
        const ratingInput = document.getElementById("rating");
        const ratingFeedback = document.getElementById("ratingFeedbackText");
        let currentSelectedRating = 0;

        function updateStarsVisual(rating) {
            stars.forEach(s => {
                const val = Number(s.dataset.rating);
                if (val <= rating) {
                    s.classList.add("active");
                } else {
                    s.classList.remove("active");
                }
            });
            if (ratingFeedback) {
                ratingFeedback.textContent = rating > 0 ? `${rating} / 5` : `0 / 5`;
            }
        }

        stars.forEach(star => {
            star.addEventListener("mouseover", () => {
                const hoverVal = Number(star.dataset.rating);
                updateStarsVisual(hoverVal);
            });
            star.addEventListener("mouseout", () => {
                updateStarsVisual(currentSelectedRating);
            });
            star.addEventListener("click", () => {
                currentSelectedRating = Number(star.dataset.rating);
                if (ratingInput) ratingInput.value = currentSelectedRating;
                updateStarsVisual(currentSelectedRating);
            });
        });

        function displayReviews() {
            let allReviews = JSON.parse(localStorage.getItem("reviews"));
            if (allReviews === null) {
                allReviews = [
                    {
                        id: `seed-1-${product.id}`,
                        productId: product.id,
                        user: currentLanguage === "ar" ? "أحمد مصطفى" : "Ahmed M.",
                        rating: 5,
                        text: currentLanguage === "ar" ? "ثبات وفوحان رائع يدوم لأكثر من 24 ساعة، والعطر أصلي وتغليفه ملكي." : "Incredible longevity and sillage lasting over 24 hours. Truly authentic luxury fragrance.",
                        date: "2026-08-28",
                        verified: true
                    },
                    {
                        id: `seed-2-${product.id}`,
                        productId: product.id,
                        user: currentLanguage === "ar" ? "منى حسن" : "Mona H.",
                        rating: 4,
                        text: currentLanguage === "ar" ? "عطر مميز جداً وفخم للمناسبات واللقاءات الهامة، التوصيل كان سريعاً." : "Very distinctive and prestigious scent for special occasions. Fast delivery!",
                        date: "2026-09-08",
                        verified: true
                    }
                ];
                localStorage.setItem("reviews", JSON.stringify(allReviews));
            }
            let productReviews = allReviews.filter(r => r.productId === product.id);

            const total = productReviews.length;
            const avg = total > 0 ? (productReviews.reduce((s, r) => s + Number(r.rating || 5), 0) / total) : 5.0;

            const badgeCount = document.getElementById("reviewsBadgeCount");
            if (badgeCount) badgeCount.textContent = `${total} ${t("reviewsCount")}`;

            const topRatingNum = document.querySelector(".details-rating-num");
            if (topRatingNum) topRatingNum.textContent = total > 0 ? avg.toFixed(1) : "5.0";
            const topRatingCount = document.querySelector(".details-review-count");
            if (topRatingCount) topRatingCount.textContent = `(${total} ${t("reviewsCount")})`;

            const dashboardEl = document.getElementById("reviewDashboard");
            if (dashboardEl) {
                const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
                productReviews.forEach(r => {
                    const sCount = Math.min(5, Math.max(1, Math.round(r.rating || 5)));
                    counts[sCount] = (counts[sCount] || 0) + 1;
                });

                dashboardEl.innerHTML = `
                    <div class="review-score-box">
                        <div class="score-large">${total > 0 ? avg.toFixed(1) : "—"}</div>
                        <div class="score-stars">${total > 0 ? "★".repeat(Math.round(avg)) + "☆".repeat(5 - Math.round(avg)) : "☆☆☆☆☆"}</div>
                        <div class="score-sub">${total} ${t("reviewsCount")}</div>
                    </div>
                    <div class="review-breakdown-bars">
                        ${[5, 4, 3, 2, 1].map(starNum => {
                            const count = counts[starNum] || 0;
                            const percent = total > 0 ? Math.round((count / total) * 100) : 0;
                            return `
                                <div class="breakdown-row">
                                    <span class="breakdown-star-label">${starNum} ★</span>
                                    <div class="breakdown-bar-track">
                                        <div class="breakdown-bar-fill" style="width:${percent}%;"></div>
                                    </div>
                                    <span class="breakdown-count">${count}</span>
                                </div>
                            `;
                        }).join("")}
                    </div>
                `;
            }

            const container = document.getElementById("reviewsContainer");
            if (container) {
                if (!productReviews.length) {
                    container.innerHTML = `
                        <div class="empty-state" style="padding:28px 20px; text-align:center; color:var(--muted); font-size:14px; background:rgba(255,255,255,0.02); border-radius:12px; border:1px dashed var(--border);">
                            <div style="font-size:32px; margin-bottom:8px;">✍️</div>
                            <p style="margin:0; color:var(--cream); font-weight:600;">${t("noReviews")}</p>
                            <p style="margin:4px 0 0; font-size:12px; color:var(--muted);">${currentLanguage === "ar" ? "كن أول من يقيّم هذا العطر عبر النموذج أدناه!" : "Be the first to review this fragrance below!"}</p>
                        </div>
                    `;
                } else {
                    container.innerHTML = productReviews.map(r => {
                        const initial = (r.user && r.user.trim()) ? r.user.trim().charAt(0).toUpperCase() : "U";
                        const starIcons = "★".repeat(Number(r.rating || 5)) + "☆".repeat(5 - Number(r.rating || 5));
                        return `
                            <div class="luxury-review-card" id="review-${r.id}">
                                <div class="review-card-top">
                                    <div class="reviewer-meta">
                                        <div class="reviewer-avatar">${initial}</div>
                                        <div>
                                            <div class="reviewer-name-row">
                                                <h4 class="reviewer-name">${r.user}</h4>
                                                ${r.verified ? `<span class="verified-badge">✓ ${t("verifiedBuyer")}</span>` : ""}
                                            </div>
                                            <span class="review-date">${r.date || "2026-09-10"}</span>
                                        </div>
                                    </div>
                                    <div style="display:flex; align-items:center; gap:10px;">
                                        <div class="review-stars-gold">${starIcons}</div>
                                        <button onclick="deleteReview('${r.id}')" class="delete-review-btn" title="${t("deleteReview")}">🗑️</button>
                                    </div>
                                </div>
                                <p class="review-text">${r.text}</p>
                            </div>
                        `;
                    }).join("");
                }
            }
        }

        window.deleteReview = function(reviewId) {
            let allReviews = JSON.parse(localStorage.getItem("reviews")) || [];
            allReviews = allReviews.filter(r => String(r.id) !== String(reviewId));
            localStorage.setItem("reviews", JSON.stringify(allReviews));

            showNotification(t("reviewDeleted"), "success");
            displayReviews();
        };

        const submitBtn = document.getElementById("submitReview");
        if (submitBtn) {
            submitBtn.addEventListener("click", () => {
                const rating = Number(document.getElementById("rating").value);
                if (!rating || rating < 1) {
                    showNotification(t("selectRating"), "error");
                    return;
                }
                const text = document.getElementById("reviewText").value.trim();
                if (!text) {
                    showNotification(t("writeReview"), "error");
                    return;
                }
                const savedUser = JSON.parse(localStorage.getItem("user"));
                const authorInput = document.getElementById("reviewAuthorName");
                const userName = savedUser ? savedUser.name : (authorInput && authorInput.value.trim() ? authorInput.value.trim() : (currentLanguage === "ar" ? "عميل مميز" : "VIP Customer"));

                const newReview = {
                    id: Date.now(),
                    productId: product.id,
                    user: userName,
                    rating: rating,
                    text: text,
                    date: new Date().toLocaleDateString(currentLanguage === "ar" ? "ar-EG" : "en-US", { year: "numeric", month: "short", day: "numeric" }),
                    verified: true
                };

                const allReviews = JSON.parse(localStorage.getItem("reviews")) || [];
                allReviews.unshift(newReview);
                localStorage.setItem("reviews", JSON.stringify(allReviews));

                document.getElementById("reviewText").value = "";
                if (authorInput) authorInput.value = "";
                currentSelectedRating = 0;
                if (ratingInput) ratingInput.value = 0;
                updateStarsVisual(0);

                displayReviews();
                showNotification(t("reviewSuccess"));
            });
        }

        displayReviews();

    } else {
        detailsContainer.innerHTML = `
            <div class="empty-state" style="text-align:center; padding:50px 20px;">
                <h2 style="color:var(--gold2); margin-bottom:12px;">Perfume Not Found / لم يتم العثور على العطر</h2>
                <p class="muted" style="margin-bottom:20px;">The requested fragrance could not be found.</p>
                <a class="primary-link" href="products.html">${t("backProducts")}</a>
            </div>
        `;
    }
}

// ================= CART =================
const cartContainer = document.querySelector(".cart-container");
if (cartContainer) {
    function getCartItems() {
        const items = [];
        cart.forEach(product => {
            const existing = items.find(item => item.id === product.id);
            if (existing) existing.quantity++;
            else items.push({ ...product, quantity: 1 });
        });
        return items;
    }
    async function saveCart(items) {
        const newCart = [];
    
        items.forEach(product => {
            for (let i = 0; i < product.quantity; i++) {
                newCart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image
                });
            }
        });
    
        cart = newCart;
        await window.saveUserCart(newCart);
        updateNavBadges();
    }
    function displayCart() {
        const items = getCartItems();
        cartContainer.innerHTML = "";
        let total = 0;
        if (!items.length) {
            cartContainer.innerHTML = `<div class="empty-state">${t("emptyCart")}</div>`;
            const totalEl = document.getElementById("cartTotal"); if (totalEl) totalEl.textContent = "0";
            return;
        }
        items.forEach(product => {
            total += Number(product.price) * product.quantity;
            cartContainer.innerHTML += `<div class="cart-item"><img src="./images/${product.image}" alt="${product.name}"><div class="cart-item-info"><h3>${product.name}</h3><p>${product.price} EGP</p><div class="cart-controls"><button class="decrease" data-id="${product.id}">−</button><span>${product.quantity}</span><button class="increase" data-id="${product.id}">+</button>
<button class="remove danger-btn" data-id="${product.id}">
    ${t("remove")}
</button>            </div></div></div>`;
        });
        document.getElementById("cartTotal").textContent = total;
        document.querySelectorAll(".increase").forEach(btn => btn.addEventListener("click", () => { const p = items.find(x => x.id === Number(btn.dataset.id)); p.quantity++; saveCart(items); displayCart(); }));
        document.querySelectorAll(".decrease").forEach(btn => btn.addEventListener("click", () => { const p = items.find(x => x.id === Number(btn.dataset.id)); if (p.quantity > 1) p.quantity--; else items.splice(items.indexOf(p), 1); saveCart(items); displayCart(); }));
        document.querySelectorAll(".remove").forEach(btn => btn.addEventListener("click", () => { saveCart(items.filter(x => x.id !== Number(btn.dataset.id)));
        displayCart(); }));
    }
    async function loadCart() {
        while (typeof window.getUserCart !== "function") {
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    
        cart = await window.getUserCart();
    
        cartLoaded = true;
    
        displayCart();
        updateNavBadges();
    }
    
    loadCart();
    const clearCartButton = document.getElementById("clearCart");

    if (clearCartButton) {
        clearCartButton.addEventListener("click", async () => {
            cart = [];
    
            await window.saveUserCart([]);
    
            cartLoaded = true;
    
            displayCart();
            updateNavBadges();
        });
    }
}

const checkoutButton = document.getElementById("checkout");
if (checkoutButton) {
    checkoutButton.addEventListener("click", async () => {
        if (!cartLoaded) {
            await loadCart();
        }

        if (!cart.length) {
            showNotification(t("emptyCart"), "error");
            return;
        }

        if (localStorage.getItem("isLoggedIn") !== "true") {
            showNotification("Please login to proceed to checkout / يرجى تسجيل الدخول لإتمام الطلب", "error");
            setTimeout(() => {
                window.location.href = "login.html";
            }, 1200);
            return;
        }

        window.location.href = "checkout.html";
    });
}
// ================= CHECKOUT & PROMO CODES =================

const PROMO_CODES = {
    "LUXURY10": { percent: 10, label: "10% OFF" },
    "ROYAL20": { percent: 20, label: "20% OFF" },
    "VIP500": { flat: 500, label: "500 EGP OFF" },
    "WELCOME15": { percent: 15, label: "15% OFF" }
};

let appliedPromo = null;

const checkoutForm = document.getElementById("checkoutForm");
const paymentSelect = document.getElementById("payment");
const cardPaymentBox = document.getElementById("cardPaymentBox");
const promoInput = document.getElementById("promoCodeInput");
const applyPromoBtn = document.getElementById("applyPromoBtn");
const promoMsg = document.getElementById("promoMessage");
const summaryItemsEl = document.getElementById("checkoutSummaryItems");
const subtotalEl = document.getElementById("summarySubtotal");
const discountLineEl = document.getElementById("promoDiscountLine");
const discountLabelEl = document.getElementById("promoDiscountLabel");
const discountValEl = document.getElementById("summaryDiscount");
const totalEl = document.getElementById("summaryTotal");

if (paymentSelect && cardPaymentBox) {
    paymentSelect.addEventListener("change", function () {
        if (this.value === "card") {
            cardPaymentBox.style.display = "block";
        } else {
            cardPaymentBox.style.display = "none";
        }
    });

    const ccNum = document.getElementById("ccNumber");
    const ccName = document.getElementById("ccName");
    const ccExpiry = document.getElementById("ccExpiry");
    const ccCvv = document.getElementById("ccCvv");

    const vNum = document.getElementById("visualCardNumber");
    const vName = document.getElementById("visualCardName");
    const vExp = document.getElementById("visualCardExpiry");
    const vCvv = document.getElementById("visualCardCvv");
    const vCard = document.getElementById("visualCard");
    const cardLogo = document.getElementById("cardLogo");

    if (ccNum && vNum) {
        ccNum.addEventListener("input", (e) => {
            let val = e.target.value.replace(/\D/g, '');
            let formatted = val.match(/.{1,4}/g)?.join(' ') || '';
            e.target.value = formatted;
            vNum.textContent = formatted || "#### #### #### ####";
            
            if(val.startsWith("4")) cardLogo.textContent = "VISA";
            else if(val.startsWith("5")) cardLogo.textContent = "Mastercard";
            else if(val.startsWith("3")) cardLogo.textContent = "AMEX";
            else cardLogo.textContent = "ROYAL";
        });

        ccName.addEventListener("input", (e) => {
            vName.textContent = e.target.value.toUpperCase() || "YOUR NAME";
        });

        ccExpiry.addEventListener("input", (e) => {
            let val = e.target.value.replace(/\D/g, '');
            if (val.length > 2) {
                val = val.substring(0, 2) + '/' + val.substring(2, 4);
            }
            e.target.value = val;
            vExp.textContent = val || "MM/YY";
        });

        ccCvv.addEventListener("input", (e) => {
            e.target.value = e.target.value.replace(/\D/g, '');
            vCvv.textContent = e.target.value || "***";
        });

        ccCvv.addEventListener("focus", () => vCard.classList.add("is-flipped"));
        ccCvv.addEventListener("blur", () => vCard.classList.remove("is-flipped"));
    }
}

function groupCartItems(cartList) {
    const map = new Map();
    cartList.forEach(item => {
        const id = Number(item.id);
        const qty = Number(item.quantity) || 1;
        if (map.has(id)) {
            const existing = map.get(id);
            existing.quantity += qty;
        } else {
            map.set(id, { ...item, quantity: qty });
        }
    });
    return Array.from(map.values());
}

async function renderCheckoutSummary() {
    if (!summaryItemsEl) return;

    let activeCart = [];
    if (typeof window.getUserCart === "function") {
        activeCart = await window.getUserCart();
    } else {
        activeCart = JSON.parse(localStorage.getItem("cart")) || [];
    }

    if (!activeCart || !activeCart.length) {
        summaryItemsEl.innerHTML = `<p class="empty-state" style="padding:20px; font-size:14px;">${t("emptyCart")}</p>`;
        if (subtotalEl) subtotalEl.textContent = "0 EGP";
        if (discountLineEl) discountLineEl.style.display = "none";
        if (totalEl) totalEl.textContent = "0 EGP";
        return;
    }

    const grouped = groupCartItems(activeCart);
    const subtotal = grouped.reduce((sum, item) => sum + (Number(item.price) * item.quantity), 0);

    summaryItemsEl.innerHTML = grouped.map(item => `
        <div class="summary-item">
            <img src="./images/${item.image}" alt="${item.name}">
            <div class="summary-item-info">
                <h4>${item.name}</h4>
                <span class="summary-item-qty">${item.quantity} × ${Number(item.price).toLocaleString()} EGP</span>
            </div>
            <span class="summary-item-total">${(Number(item.price) * item.quantity).toLocaleString()} EGP</span>
        </div>
    `).join("");

    let discount = 0;
    if (appliedPromo) {
        if (appliedPromo.percent) {
            discount = Math.round(subtotal * (appliedPromo.percent / 100));
        } else if (appliedPromo.flat) {
            discount = Math.min(subtotal, appliedPromo.flat);
        }
        appliedPromo.discountAmount = discount;
    }

    const finalTotal = Math.max(0, subtotal - discount);

    if (subtotalEl) subtotalEl.textContent = `${subtotal.toLocaleString()} EGP`;

    if (discountLineEl && discountValEl) {
        if (discount > 0 && appliedPromo) {
            discountLineEl.style.display = "flex";
            if (discountLabelEl) {
                discountLabelEl.textContent = `${t("discount")} (${appliedPromo.code} - ${appliedPromo.label})`;
            }
            discountValEl.textContent = `-${discount.toLocaleString()} EGP`;
        } else {
            discountLineEl.style.display = "none";
        }
    }

    if (totalEl) {
        totalEl.textContent = `${finalTotal.toLocaleString()} EGP`;
    }
}

function applyPromoCode(codeStr) {
    if (!promoMsg) return;
    const cleanCode = (codeStr || (promoInput ? promoInput.value : "")).trim().toUpperCase();

    if (!cleanCode) {
        promoMsg.style.display = "block";
        promoMsg.className = "promo-message promo-error";
        promoMsg.textContent = t("promoRequired");
        return;
    }

    if (appliedPromo && appliedPromo.code === cleanCode) {
        promoMsg.style.display = "block";
        promoMsg.className = "promo-message promo-error";
        promoMsg.textContent = t("promoAlreadyApplied");
        return;
    }

    if (PROMO_CODES[cleanCode]) {
        const promo = PROMO_CODES[cleanCode];
        appliedPromo = { code: cleanCode, ...promo };
        if (promoInput) promoInput.value = cleanCode;

        promoMsg.style.display = "block";
        promoMsg.className = "promo-message promo-success";
        promoMsg.innerHTML = `<span>✓</span> <strong>${cleanCode}</strong> ${t("promoSuccess")} (${promo.label})`;

        renderCheckoutSummary();
    } else {
        promoMsg.style.display = "block";
        promoMsg.className = "promo-message promo-error";
        promoMsg.textContent = t("promoInvalid");
    }
}

if (applyPromoBtn) {
    applyPromoBtn.addEventListener("click", () => applyPromoCode());
}

if (promoInput) {
    promoInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            applyPromoCode();
        }
    });
}

document.querySelectorAll(".promo-chip").forEach(chip => {
    chip.addEventListener("click", () => {
        const code = chip.dataset.code;
        if (code) {
            applyPromoCode(code);
        }
    });
});

if (summaryItemsEl) {
    renderCheckoutSummary();
}

if (checkoutForm) {
    checkoutForm.addEventListener("submit", async event => {
        event.preventDefault();

        if (document.getElementById("payment").value === "card") {
            const ccNum = document.getElementById("ccNumber").value.replace(/\s/g, '');
            if(ccNum.length < 15) {
                showNotification("Please enter a valid card number.", "error");
                return;
            }
            const ccExp = document.getElementById("ccExpiry").value;
            if(!/^\d{2}\/\d{2}$/.test(ccExp)) {
                showNotification("Please enter a valid expiry date (MM/YY).", "error");
                return;
            }
            const ccCvv = document.getElementById("ccCvv").value;
            if(ccCvv.length < 3) {
                showNotification("Please enter a valid CVV.", "error");
                return;
            }
        }

        let activeCart = [];
        if (typeof window.getUserCart === "function") {
            activeCart = await window.getUserCart();
        } else {
            activeCart = JSON.parse(localStorage.getItem("cart")) || [];
        }

        if (!activeCart || !activeCart.length) {
            showNotification(t("emptyCart"), "error");
            return;
        }

        const grouped = groupCartItems(activeCart);
        const subtotal = grouped.reduce((sum, p) => sum + (Number(p.price) * p.quantity), 0);

        let discount = 0;
        if (appliedPromo) {
            if (appliedPromo.percent) {
                discount = Math.round(subtotal * (appliedPromo.percent / 100));
            } else if (appliedPromo.flat) {
                discount = Math.min(subtotal, appliedPromo.flat);
            }
        }
        const finalTotal = Math.max(0, subtotal - discount);

        const order = {
            id: Date.now(),
            customer: {
                fullName: document.getElementById("fullName").value.trim(),
                phone: document.getElementById("phone").value.trim(),
                address: document.getElementById("address").value.trim(),
                payment: document.getElementById("payment").value
            },
            products: grouped,
            subtotal,
            promoCode: appliedPromo ? appliedPromo.code : null,
            discount,
            total: finalTotal,
            status: "pending",
            date: new Date().toLocaleString(currentLanguage === "ar" ? "ar-EG" : "en-US")
        };

        if (typeof window.saveUserOrder === "function") {
            await window.saveUserOrder(order);
        } else {
            const orders = JSON.parse(localStorage.getItem("orders")) || [];
            orders.push(order);
            localStorage.setItem("orders", JSON.stringify(orders));
            localStorage.setItem("lastOrder", JSON.stringify(order));
        }

        cart = [];
        if (typeof window.saveUserCart === "function") {
            await window.saveUserCart([]);
        }
        localStorage.removeItem("cart");
        appliedPromo = null;

        window.location.href = "order-success.html";
    });
}

// ================= ORDER TRACKING & INVOICE =================

function renderOrderTracker(status) {
    const s = status || "pending";
    if (s === "cancelled") {
        return `
            <div class="order-tracker-cancelled">
                <span>✕</span> <strong>${t("statusCancelled")}</strong>
            </div>
        `;
    }

    const steps = [
        { key: "pending", label: t("statusPending"), icon: "📝" },
        { key: "packaging", label: t("statusPackaging"), icon: "🎁" },
        { key: "in_transit", label: t("statusInTransit"), icon: "🚚" },
        { key: "delivered", label: t("statusDelivered"), icon: "✨" }
    ];

    const statusOrder = ["pending", "packaging", "in_transit", "delivered"];
    let currentIdx = statusOrder.indexOf(s);
    if (currentIdx === -1) currentIdx = 0;

    return `
        <div class="order-tracker-wrapper">
            <div class="order-tracker-line" style="--track-progress:${(currentIdx / (steps.length - 1)) * 100}%;"></div>
            <div class="order-tracker-steps">
                ${steps.map((step, idx) => {
                    const isDone = idx < currentIdx;
                    const isActive = idx === currentIdx;
                    const stateClass = isDone ? "step-done" : (isActive ? "step-active" : "step-pending");
                    return `
                        <div class="tracker-step ${stateClass}">
                            <div class="step-circle">${isDone ? "✓" : step.icon}</div>
                            <span class="step-label">${step.label}</span>
                        </div>
                    `;
                }).join("")}
            </div>
        </div>
    `;
}

window.printOrderInvoice = function(orderId) {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    const lastOrder = JSON.parse(localStorage.getItem("lastOrder"));
    if (lastOrder && !orders.some(o => o && String(o.id) === String(lastOrder.id))) {
        orders.push(lastOrder);
    }
    const order = orders.find(o => o && String(o.id) === String(orderId)) || lastOrder;

    if (!order) {
        showNotification("Order not found / تعذر العثور على الفاتورة", "error");
        return;
    }

    const printWindow = window.open("", "_blank", "width=850,height=900");
    if (!printWindow) {
        showNotification("Please allow popups to print invoice / يرجى السماح بالنوافذ المنبثقة للطباعة", "error");
        return;
    }

    const isAr = currentLanguage === "ar";
    const subtotal = order.subtotal || order.total;
    const discount = order.discount || 0;
    const total = order.total;

    printWindow.document.write(`
        <!DOCTYPE html>
        <html lang="${isAr ? "ar" : "en"}" dir="${isAr ? "rtl" : "ltr"}">
        <head>
            <meta charset="UTF-8">
            <title>Invoice #${order.id} - Perfume Store</title>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Cairo:wght@400;600;700;800&display=swap');
                body {
                    font-family: 'Cairo', 'Segoe UI', Tahoma, sans-serif;
                    background: #fff;
                    color: #1a1a1a;
                    padding: 40px;
                    margin: 0;
                    box-sizing: border-box;
                }
                .invoice-container {
                    max-width: 780px;
                    margin: 0 auto;
                    border: 2px solid #c9a227;
                    padding: 35px;
                    border-radius: 8px;
                    position: relative;
                }
                .invoice-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 2px solid #c9a227;
                    padding-bottom: 20px;
                    margin-bottom: 25px;
                }
                .brand {
                    font-family: 'Cinzel', serif;
                    font-size: 26px;
                    font-weight: 700;
                    color: #111;
                    letter-spacing: 2px;
                }
                .brand span { color: #c9a227; }
                .invoice-tag {
                    font-size: 13px;
                    color: #666;
                    text-transform: uppercase;
                    margin-top: 4px;
                }
                .invoice-meta {
                    text-align: ${isAr ? "left" : "right"};
                    font-size: 14px;
                }
                .invoice-meta h2 {
                    margin: 0 0 5px;
                    color: #c9a227;
                    font-size: 20px;
                }
                .customer-section {
                    display: flex;
                    justify-content: space-between;
                    background: #fdfbf7;
                    border: 1px solid #f0e6d2;
                    border-radius: 6px;
                    padding: 16px 20px;
                    margin-bottom: 25px;
                    font-size: 14px;
                }
                .customer-section div p { margin: 4px 0; }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-bottom: 25px;
                    font-size: 14px;
                }
                th {
                    background: #1a1510;
                    color: #c9a227;
                    padding: 12px 14px;
                    text-align: ${isAr ? "right" : "left"};
                    font-weight: 700;
                }
                td {
                    padding: 12px 14px;
                    border-bottom: 1px solid #e0d8cc;
                }
                .totals-table {
                    width: 320px;
                    margin-${isAr ? "right" : "left"}: auto;
                    margin-bottom: 30px;
                }
                .totals-table td { padding: 6px 12px; }
                .grand-total {
                    font-size: 18px;
                    font-weight: 800;
                    color: #997300;
                    border-top: 2px solid #c9a227;
                }
                .invoice-footer {
                    border-top: 1px dashed #ccc;
                    padding-top: 20px;
                    text-align: center;
                    font-size: 12px;
                    color: #666;
                }
                .royal-seal {
                    display: inline-block;
                    border: 2px solid #c9a227;
                    color: #c9a227;
                    padding: 4px 12px;
                    border-radius: 20px;
                    font-weight: 700;
                    font-size: 11px;
                    letter-spacing: 1px;
                    margin-top: 10px;
                }
                @media print {
                    body { padding: 0; }
                    .invoice-container { border: none; padding: 15px; }
                    button { display: none; }
                }
            </style>
        </head>
        <body>
            <div class="invoice-container">
                <div class="invoice-header">
                    <div>
                        <div class="brand">PERFUME <span>STORE</span></div>
                        <div class="invoice-tag">${isAr ? "فاتورة شراء عطور أصلية فاخرة" : "Official Luxury Fragrance Invoice"}</div>
                    </div>
                    <div class="invoice-meta">
                        <h2>${isAr ? "فاتورة رقم" : "INVOICE"} #${order.id}</h2>
                        <div>${isAr ? "التاريخ" : "Date"}: ${order.date}</div>
                        <div>${isAr ? "طريقة الدفع" : "Payment"}: ${order.customer && order.customer.payment === "cash" ? (isAr ? "الدفع عند الاستلام" : "Cash on Delivery") : (isAr ? "بطاقة بنكية" : "Credit Card")}</div>
                    </div>
                </div>

                <div class="customer-section">
                    <div>
                        <strong>${isAr ? "بيانات العميل:" : "Customer Details:"}</strong>
                        <p>${isAr ? "الاسم" : "Name"}: ${order.customer ? order.customer.fullName : ""}</p>
                        <p>${isAr ? "الهاتف" : "Phone"}: ${order.customer ? order.customer.phone : ""}</p>
                    </div>
                    <div>
                        <strong>${isAr ? "عنوان التوصيل:" : "Delivery Address:"}</strong>
                        <p>${order.customer ? order.customer.address : ""}</p>
                    </div>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>${isAr ? "العطر" : "Fragrance"}</th>
                            <th>${isAr ? "الكمية" : "Qty"}</th>
                            <th>${isAr ? "سعر القطعة" : "Unit Price"}</th>
                            <th>${isAr ? "الإجمالي" : "Total"}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${order.products.map((p, idx) => `
                            <tr>
                                <td>${idx + 1}</td>
                                <td><strong>${p.name}</strong></td>
                                <td>${p.quantity || 1}</td>
                                <td>${Number(p.price).toLocaleString()} EGP</td>
                                <td>${((p.quantity || 1) * Number(p.price)).toLocaleString()} EGP</td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>

                <table class="totals-table">
                    <tr>
                        <td>${isAr ? "المجموع الفرعي:" : "Subtotal:"}</td>
                        <td style="text-align:${isAr ? "left" : "right"}; font-weight:700;">${Number(subtotal).toLocaleString()} EGP</td>
                    </tr>
                    ${order.promoCode ? `
                    <tr style="color:#27ae60;">
                        <td>${isAr ? "كود الخصم" : "Promo Code"} (${order.promoCode}):</td>
                        <td style="text-align:${isAr ? "left" : "right"}; font-weight:700;">-${Number(discount).toLocaleString()} EGP</td>
                    </tr>` : ""}
                    <tr>
                        <td>${isAr ? "الشحن والتوصيل:" : "Delivery:"}</td>
                        <td style="text-align:${isAr ? "left" : "right"}; font-weight:700; color:#27ae60;">${isAr ? "مجاني 🎁" : "FREE 🎁"}</td>
                    </tr>
                    <tr class="grand-total">
                        <td>${isAr ? "الإجمالي النهائي:" : "Grand Total:"}</td>
                        <td style="text-align:${isAr ? "left" : "right"};">${Number(total).toLocaleString()} EGP</td>
                    </tr>
                </table>

                <div class="invoice-footer">
                    <p>${isAr ? "شكرًا لاختياركم متجر العطور الفاخرة. نتمنى لكم تجربة عطرية لا تُنسى!" : "Thank you for choosing Perfume Store. We hope you enjoy your royal fragrance!"}</p>
                    <p>${isAr ? "ضمان أصالة 100% — استبدال واسترجاع خلال 14 يوماً في حال عدم فتح الغلاف الأصلي." : "100% Authenticity Guarantee — 14 days exchange for sealed fragrances."}</p>
                    <div class="royal-seal">👑 100% AUTHENTIC LUXURY</div>
                </div>
            </div>
            <script>
                window.onload = function() {
                    window.print();
                };
            </script>
        </body>
        </html>
    `);
    printWindow.document.close();
};

function sanitizeOrders(ordersList) {
    if (!Array.isArray(ordersList)) return [];
    const map = new Map();
    ordersList.forEach(o => {
        if (o && o.id) {
            map.set(String(o.id), { ...o, id: String(o.id) });
        }
    });
    return Array.from(map.values());
}

window.cancelOrder = async function(orderId) {
    const strId = String(orderId);
    let orders = sanitizeOrders(JSON.parse(localStorage.getItem("orders")) || []);
    let updated = false;

    orders = orders.map(o => {
        if (String(o.id) === strId) {
            updated = true;
            return { ...o, status: "cancelled" };
        }
        return o;
    });

    if (updated) {
        localStorage.setItem("orders", JSON.stringify(orders));

        const lastOrder = JSON.parse(localStorage.getItem("lastOrder"));
        if (lastOrder && String(lastOrder.id) === strId) {
            lastOrder.status = "cancelled";
            localStorage.setItem("lastOrder", JSON.stringify(lastOrder));
        }

        // Sync cancellation to Firebase in background without duplicating
        if (typeof window.updateUserOrderStatus === "function") {
            window.updateUserOrderStatus(strId, "cancelled").catch(() => {});
        }

        showNotification(t("orderCancelled"), "success");

        // Instant in-place DOM update (zero flicker, zero duplication)
        const cardEl = document.getElementById(`order-${strId}`);
        if (cardEl) {
            const badge = cardEl.querySelector(".order-status-badge");
            if (badge) {
                badge.textContent = currentLanguage === "ar" ? "ملغي ✕" : "Cancelled ✕";
                badge.style.background = "rgba(220, 53, 69, 0.15)";
                badge.style.borderColor = "rgba(220, 53, 69, 0.4)";
                badge.style.color = "#ff6b6b";
            }
            const trackerContainer = cardEl.querySelector(".order-tracker-container");
            if (trackerContainer) {
                trackerContainer.innerHTML = renderOrderTracker("cancelled");
            }
            const cancelBtn = cardEl.querySelector(".cancel-action-btn");
            if (cancelBtn) {
                cancelBtn.remove();
            }
        } else {
            if (typeof displayOrders === "function") displayOrders(true);
        }

        if (typeof displayOrderDetails === "function") displayOrderDetails();
    }
};

window.deleteOrder = async function(orderId) {
    const strId = String(orderId);
    let orders = sanitizeOrders(JSON.parse(localStorage.getItem("orders")) || []);
    orders = orders.filter(o => o && String(o.id) !== strId);
    localStorage.setItem("orders", JSON.stringify(orders));

    const lastOrder = JSON.parse(localStorage.getItem("lastOrder"));
    if (lastOrder && String(lastOrder.id) === strId) {
        localStorage.removeItem("lastOrder");
    }

    // Instantly animate and remove card from DOM
    const cardEl = document.getElementById(`order-${strId}`);
    if (cardEl) {
        cardEl.style.transition = "all 0.28s cubic-bezier(0.4, 0, 0.2, 1)";
        cardEl.style.opacity = "0";
        cardEl.style.transform = "scale(0.92) translateY(12px)";
        setTimeout(() => {
            cardEl.remove();
            const countEl = document.getElementById("ordersHeaderCount");
            if (countEl) countEl.textContent = `${orders.length} ${t("ordersCountText")}`;
            if (!orders.length && typeof renderEmptyOrdersState === "function") {
                renderEmptyOrdersState();
            }
        }, 250);
    } else {
        if (typeof displayOrders === "function") displayOrders(true);
    }

    // Sync deletion to Firebase in background
    if (typeof window.deleteUserOrderFirebase === "function") {
        window.deleteUserOrderFirebase(strId).catch(() => {});
    }

    showNotification(t("orderDeleted"), "success");
    if (typeof displayOrderDetails === "function") displayOrderDetails();
};

window.clearAllOrders = async function() {
    localStorage.setItem("orders", JSON.stringify([]));
    localStorage.removeItem("lastOrder");

    if (typeof renderEmptyOrdersState === "function") {
        renderEmptyOrdersState();
    } else if (typeof displayOrders === "function") {
        displayOrders(true);
    }

    // Sync clear to Firebase in background
    if (typeof window.clearAllUserOrdersFirebase === "function") {
        window.clearAllUserOrdersFirebase().catch(() => {});
    }

    showNotification(t("allOrdersCleared"), "success");
    if (typeof displayOrderDetails === "function") displayOrderDetails();
};

// ================= ORDER SUCCESS =================

const orderDetails = document.getElementById("orderDetails");

function displayOrderDetails() {
    if (!orderDetails) return;

    const order = JSON.parse(localStorage.getItem("lastOrder"));

    if (!order) {
        orderDetails.innerHTML = `<p class="muted">No recent order details found.</p>`;
        return;
    }

    const orderIdStr = String(order.id);

    orderDetails.innerHTML = `
        <!-- Order Tracking Stepper -->
        <div class="order-status-section">
            <h3 style="margin-bottom:14px; font-size:16px; color:var(--gold2);">${t("orderStatus")}</h3>
            ${renderOrderTracker(order.status)}
        </div>

        <div class="order-info-grid">
            <div>
                <h3>${t("orderNumber")}${order.id}</h3>
                <p>${t("customer")}: ${order.customer ? order.customer.fullName : ""}</p>
                <p>${t("phone")}: ${order.customer ? order.customer.phone : ""}</p>
                <p>${t("address")}: ${order.customer ? order.customer.address : ""}</p>
                <p>${t("payment")}: ${order.customer && order.customer.payment === "cash" ? t("cash") : (order.customer && order.customer.payment === "card" ? t("card") : (order.customer ? order.customer.payment : ""))}</p>
            </div>
        </div>

        ${order.products && order.products.length ? `
            <div style="margin: 18px 0; padding: 14px 0; border-top: 1px dashed var(--border); border-bottom: 1px dashed var(--border);">
                <strong style="color:var(--cream); display:block; margin-bottom:10px;">${currentLanguage === "ar" ? "العطور المطلوبة:" : "Ordered Fragrances:"}</strong>
                ${order.products.map(p => `
                    <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:14px;">
                        <span>${p.name} ${p.quantity ? `× ${p.quantity}` : ""}</span>
                        <span style="color:var(--gold2); font-weight:700;">${((p.quantity || 1) * Number(p.price)).toLocaleString()} EGP</span>
                    </div>
                `).join("")}
            </div>
        ` : ""}

        ${order.promoCode && order.discount ? `
            <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:14px; color:var(--success); font-weight:700;">
                <span>🎟️ ${t("discount")} (${order.promoCode}):</span>
                <span>-${Number(order.discount).toLocaleString()} EGP</span>
            </div>
        ` : ""}

        <h2>${t("total")}: ${Number(order.total).toLocaleString()} EGP</h2>
        <p style="font-size:13px; color:var(--muted); margin-bottom:16px;">${t("date")}: ${order.date}</p>

        <!-- Action Row -->
        <div class="order-action-buttons">
            <button onclick="printOrderInvoice('${orderIdStr}')" class="invoice-action-btn">🖨️ ${t("printInvoice")}</button>
            ${order.status === "pending" || !order.status ? `
                <button onclick="cancelOrder('${orderIdStr}')" class="cancel-action-btn">✕ ${t("cancelOrder")}</button>
            ` : ""}
            <button onclick="deleteOrder('${orderIdStr}')" class="delete-order-btn">🗑️ ${t("deleteOrder")}</button>
        </div>
    `;
}

displayOrderDetails();

// ================= ORDER HISTORY =================

const ordersContainer = document.getElementById("ordersContainer");

function renderEmptyOrdersState() {
    if (!ordersContainer) return;
    ordersContainer.innerHTML = `
        <div class="empty-state">
            <div style="font-size:48px; margin-bottom:12px;">📦</div>
            <h3 style="color:var(--gold2); margin-bottom:8px;">${t("noOrders")}</h3>
            <p style="color:var(--muted); margin-bottom:20px;">${currentLanguage === "ar" ? "لم تقم بإجراء أي طلبات حتى الآن أو تم حذفها." : "You haven't placed any orders yet or they have been cleared."}</p>
            <a href="products.html" class="primary-link" style="display:inline-block; padding:12px 24px; text-decoration:none;">${t("exploreCollection") || "تصفح العطور 🌟"}</a>
        </div>
    `;
}

async function displayOrders(skipFirebase = false) {
    if (!ordersContainer) return;

    let orders = JSON.parse(localStorage.getItem("orders"));
    
    // Only fetch remote if never initialized in localStorage and not skipping
    if (orders === null && !skipFirebase && typeof window.getUserOrders === "function") {
        try {
            orders = await window.getUserOrders();
        } catch (e) {
            orders = [];
        }
    } else if (orders === null) {
        orders = [];
    }

    orders = sanitizeOrders(orders);
    localStorage.setItem("orders", JSON.stringify(orders));

    if (!orders.length) {
        renderEmptyOrdersState();
        return;
    }

    const headerControls = `
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom: 24px; padding: 14px 20px; background: var(--card2); border: 1px solid var(--border); border-radius: var(--radius);">
            <div style="display:flex; align-items:center; gap:8px;">
                <span style="font-size:18px;">📋</span>
                <span id="ordersHeaderCount" style="color:var(--cream); font-weight:700; font-size:14px;">
                    ${orders.length} ${t("ordersCountText")}
                </span>
            </div>
            <button onclick="clearAllOrders()" class="clear-all-orders-btn">
                🗑️ ${t("clearAllOrders")}
            </button>
        </div>
    `;

    const ordersCardsHtml = orders
        .slice()
        .reverse()
        .map(order => {
            const orderIdStr = String(order.id);
            const isCancelled = order.status === "cancelled";
            const isPending = order.status === "pending" || !order.status;

            return `
            <article class="order-card" id="order-${orderIdStr}">
                <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
                    <h3 style="margin:0;">
                        ${t("orderNumber")}${orderIdStr}
                    </h3>
                    <span class="order-status-badge" style="background:${isCancelled ? "rgba(220,53,69,0.15)" : "rgba(201,162,39,0.15)"}; color:${isCancelled ? "#ff6b6b" : "var(--gold2)"}; border:1px solid ${isCancelled ? "rgba(220,53,69,0.4)" : "var(--border)"}; padding:4px 12px; border-radius:20px; font-size:12px; font-weight:700;">
                        ${isCancelled ? (currentLanguage === "ar" ? "ملغي ✕" : "Cancelled ✕") : (isPending ? (currentLanguage === "ar" ? "قيد المراجعة ⏳" : "Pending ⏳") : order.status)}
                    </span>
                </div>

                <!-- Order Tracking Stepper -->
                <div class="order-tracker-container" style="margin: 16px 0;">
                    ${renderOrderTracker(order.status)}
                </div>

                <p><strong>${t("date")}:</strong> ${order.date}</p>
                <p><strong>${t("payment")}:</strong> ${order.customer && order.customer.payment === "cash" ? t("cash") : (order.customer && order.customer.payment === "card" ? t("card") : (order.customer ? order.customer.payment : ""))}</p>

                ${order.products && order.products.length ? `
                    <div style="margin: 12px 0; padding:10px 0; border-top:1px dashed rgba(201,162,39,0.15); font-size: 13px; color: var(--muted);">
                        <strong style="color:var(--cream);">${currentLanguage === "ar" ? "العطور:" : "Fragrances:"}</strong>
                        ${order.products.map(p => `${p.name} ${p.quantity ? `(×${p.quantity})` : ""}`).join(" • ")}
                    </div>
                ` : ""}

                ${order.promoCode ? `
                    <p style="font-size:13px; color:var(--success); margin:6px 0; font-weight:700;">
                        🎟️ ${currentLanguage === "ar" ? "كود الخصم:" : "Promo Code:"} <strong>${order.promoCode}</strong> ${order.discount ? `(-${Number(order.discount).toLocaleString()} EGP)` : ""}
                    </p>
                ` : ""}

                <p class="order-total" style="font-size:18px; color:var(--gold2); font-weight:800; margin:12px 0;">
                    ${t("total")}: ${Number(order.total).toLocaleString()} EGP
                </p>

                <div class="order-action-buttons">
                    <button onclick="printOrderInvoice('${orderIdStr}')" class="invoice-action-btn">🖨️ ${t("printInvoice")}</button>
                    ${isPending ? `
                        <button onclick="cancelOrder('${orderIdStr}')" class="cancel-action-btn">✕ ${t("cancelOrder")}</button>
                    ` : ""}
                    <button onclick="deleteOrder('${orderIdStr}')" class="delete-order-btn">🗑️ ${t("deleteOrder")}</button>
                </div>

            </article>
        `;
        })
        .join("");

    ordersContainer.innerHTML = headerControls + ordersCardsHtml;
}

if (ordersContainer) {
    displayOrders();
}

// ================= PAGE PROTECTION =================
const protectedPages = ["checkout.html", "order-history.html", "profile.html"];
const currentPage = getCurrentPage();
if (protectedPages.includes(currentPage) && localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "login.html";
}

// ================= START LAYOUT =================
document.documentElement.lang = currentLanguage;
document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
renderLayout();
refreshPageText();
renderHomeSections();
updateNavBadges();


const ratingStars =
    document.querySelectorAll(".rating-stars span");

const ratingInput =
    document.getElementById("rating");

ratingStars.forEach(function (star) {

    star.addEventListener("click", function () {

        const rating =
            Number(star.dataset.rating);

        ratingInput.value = rating;

        ratingStars.forEach(function (item) {

            const itemRating =
                Number(item.dataset.rating);

            if (itemRating <= rating) {
                item.classList.add("selected");
            } else {
                item.classList.remove("selected");
            }

        });

    });

});
// ================= WISHLIST =================

const wishlistContainer =
    document.getElementById("wishlistContainer");

if (wishlistContainer) {

    let wishlist = [];

    async function loadWishlist() {

        await window.firebaseReady;
        
        if (typeof window.getUserWishlist === "function") {
            wishlist = await window.getUserWishlist();
        } else {
            wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        }

        displayWishlist();
    }


    async function saveWishlist() {

        await window.saveUserWishlist(wishlist);
    }


    function displayWishlist() {

        wishlistContainer.innerHTML = "";

        if (wishlist.length === 0) {

            wishlistContainer.innerHTML = `
                <div class="empty-state">
                    Your wishlist is empty ❤️
                </div>
            `;

            return;
        }

        wishlist.forEach(function (product) {

            wishlistContainer.innerHTML += `

                <article class="product-card">

                    <img
                        src="./images/${product.image}"
                        alt="${product.name}"
                    >

                    <div class="product-card-body">

                        <h3>${product.name}</h3>

                        <p class="price">
                            ${product.price} EGP
                        </p>

                        <div class="product-actions">

                            <button
                                class="wishlist-remove"
                                data-id="${product.id}"
                            >
                                Remove ❤️
                            </button>

                            <button
                                class="wishlist-cart"
                                data-id="${product.id}"
                            >
                                Add to Cart
                            </button>

                        </div>

                    </div>

                </article>

            `;
        });

        addWishlistEvents();
    }


    function addWishlistEvents() {

        document
            .querySelectorAll(".wishlist-remove")
            .forEach(function (button) {

                button.addEventListener("click", async function () {

                    const id =
                        Number(button.dataset.id);

                    wishlist =
                        wishlist.filter(function (product) {
                            return product.id !== id;
                        });

                    await saveWishlist();

                    displayWishlist();
                });
            });


        document
            .querySelectorAll(".wishlist-cart")
            .forEach(function (button) {

                button.addEventListener("click", async function () {

                    const id =
                        Number(button.dataset.id);

                    const product =
                        wishlist.find(function (product) {
                            return product.id === id;
                        });

                    await window.firebaseReady;

                    let cart =
                        await window.getUserCart();

                    cart.push(product);

                    await window.saveUserCart(cart);

                    showNotification(`${product.name} ${t("addedToCart")}`);
                    updateNavBadges();
                });
            });
    }


    loadWishlist();
}
// ================= PROFILE =================

const profileContainer = document.getElementById("profileContainer");

if (profileContainer) {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
        profileContainer.innerHTML = `
            <div class="empty-state">
                <p style="margin-bottom:15px;">Please login to view your profile / يرجى تسجيل الدخول أولاً</p>
                <a class="primary-link" href="login.html">${t("login")}</a>
            </div>
        `;
    } else {
        profileContainer.innerHTML = `
            <div class="profile-card">
                <div style="font-size: 50px; margin-bottom: 12px;">👤</div>
                <h2>${savedUser.name}</h2>
                <p><strong>Email:</strong> ${savedUser.email}</p>

                <div style="margin-top: 25px; display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
                    <button id="editProfile" class="primary-link" style="border: none; cursor: pointer;">
                        Edit Profile ✏️
                    </button>
                    <button id="changePassword" class="secondary-btn" style="border-radius: 10px; padding: 12px 20px; cursor: pointer;">
                        Change Password 🔐
                    </button>
                    <button id="profileLogout" style="background: #b22222; color: white; border-radius: 10px; padding: 12px 20px; cursor: pointer;">
                        ${t("logout")}
                    </button>
                </div>

                <!-- Edit Profile Panel -->
                <div id="editProfileModal" style="display: none; margin-top: 25px; text-align: start; background: var(--card2); padding: 22px; border-radius: 14px; border: 1px solid var(--border);">
                    <h3 style="margin-bottom: 15px; color: var(--gold2); font-size: 20px;">Edit Profile / تعديل البيانات</h3>
                    <form id="editProfileForm">
                        <label for="newProfileName" style="display: block; margin-bottom: 6px; font-size: 14px; color: var(--muted);">${t("name")}</label>
                        <input type="text" id="newProfileName" value="${savedUser.name}" required style="width: 100%; padding: 12px; border-radius: 9px; border: 1px solid var(--border); background: var(--bg); color: var(--cream); margin-bottom: 15px;">
                        <div style="display: flex; gap: 10px;">
                            <button type="submit" style="padding: 10px 20px; border-radius: 9px; background: var(--gold); color: #111; font-weight: 800; cursor: pointer;">Save / حفظ</button>
                            <button type="button" id="cancelEditProfile" class="secondary-btn" style="padding: 10px 18px; border-radius: 9px; cursor: pointer;">Cancel / إلغاء</button>
                        </div>
                    </form>
                </div>

                <!-- Change Password Panel -->
                <div id="changePasswordModal" style="display: none; margin-top: 25px; text-align: start; background: var(--card2); padding: 22px; border-radius: 14px; border: 1px solid var(--border);">
                    <h3 style="margin-bottom: 15px; color: var(--gold2); font-size: 20px;">Change Password / تغيير كلمة المرور</h3>
                    <form id="changePasswordForm">
                        <label for="newPasswordInput" style="display: block; margin-bottom: 6px; font-size: 14px; color: var(--muted);">${t("password")}</label>
                        <input type="password" id="newPasswordInput" required minlength="6" placeholder="Min 6 characters / 6 أحرف على الأقل" style="width: 100%; padding: 12px; border-radius: 9px; border: 1px solid var(--border); background: var(--bg); color: var(--cream); margin-bottom: 12px;">
                        
                        <label for="confirmNewPasswordInput" style="display: block; margin-bottom: 6px; font-size: 14px; color: var(--muted);">${t("confirmPassword")}</label>
                        <input type="password" id="confirmNewPasswordInput" required minlength="6" placeholder="${t("confirmPassword")}" style="width: 100%; padding: 12px; border-radius: 9px; border: 1px solid var(--border); background: var(--bg); color: var(--cream); margin-bottom: 15px;">
                        
                        <div style="display: flex; gap: 10px;">
                            <button type="submit" style="padding: 10px 20px; border-radius: 9px; background: var(--gold); color: #111; font-weight: 800; cursor: pointer;">Update / تحديث</button>
                            <button type="button" id="cancelChangePassword" class="secondary-btn" style="padding: 10px 18px; border-radius: 9px; cursor: pointer;">Cancel / إلغاء</button>
                        </div>
                    </form>
                </div>
            </div>
        `;

        document.getElementById("profileLogout").addEventListener("click", function () {
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("user");
            window.location.href = "login.html";
        });

        const editModal = document.getElementById("editProfileModal");
        const changePassModal = document.getElementById("changePasswordModal");

        document.getElementById("editProfile").addEventListener("click", () => {
            editModal.style.display = editModal.style.display === "none" ? "block" : "none";
            changePassModal.style.display = "none";
        });

        document.getElementById("cancelEditProfile").addEventListener("click", () => {
            editModal.style.display = "none";
        });

        document.getElementById("changePassword").addEventListener("click", () => {
            changePassModal.style.display = changePassModal.style.display === "none" ? "block" : "none";
            editModal.style.display = "none";
        });

        document.getElementById("cancelChangePassword").addEventListener("click", () => {
            changePassModal.style.display = "none";
        });

        document.getElementById("editProfileForm").addEventListener("submit", async (e) => {
            e.preventDefault();
            const newName = document.getElementById("newProfileName").value.trim();
            if (!newName) return;

            try {
                if (typeof window.updateUserProfile === "function") {
                    await window.updateUserProfile(newName);
                } else {
                    savedUser.name = newName;
                    localStorage.setItem("user", JSON.stringify(savedUser));
                }
                showNotification("Profile updated successfully! ✨", "success");
                renderLayout();
                setTimeout(() => location.reload(), 800);
            } catch (err) {
                showNotification(err.message || "Failed to update profile", "error");
            }
        });

        document.getElementById("changePasswordForm").addEventListener("submit", async (e) => {
            e.preventDefault();
            const newPassword = document.getElementById("newPasswordInput").value;
            const confirmPassword = document.getElementById("confirmNewPasswordInput").value;

            if (newPassword !== confirmPassword) {
                showNotification(t("passwordsMismatch"), "error");
                return;
            }

            if (newPassword.length < 6) {
                showNotification("Password must be at least 6 characters", "error");
                return;
            }

            try {
                if (typeof window.changeUserPassword === "function") {
                    await window.changeUserPassword(newPassword);
                    showNotification("Password changed successfully! 🔐", "success");
                    changePassModal.style.display = "none";
                    document.getElementById("changePasswordForm").reset();
                } else {
                    showNotification("Firebase Auth is not ready yet.", "error");
                }
            } catch (err) {
                showNotification(err.message || "Failed to change password", "error");
            }
        });
    }
}

// ================= CONTACT FORM =================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const message = document.getElementById("contactMessage").value.trim();

        if (typeof window.sendContactMessage === "function") {
            await window.sendContactMessage({ name, email, message });
        }

        showNotification(t("messageSent"), "success");
        contactForm.reset();
    });
}

// ================= PWA SERVICE WORKER =================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch(err => {
            console.log('SW registration notice:', err);
        });
    });
}