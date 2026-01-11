(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/web_1_autocinema/src/library/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/web_1_autocinema/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$library$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/library/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = (param, ref)=>{
    let { className, variant, size, asChild = false, ...props } = param;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$library$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/web_1_autocinema/src/components/ui/button.tsx",
        lineNumber: 47,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/web_1_autocinema/src/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$library$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/library/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = (param, ref)=>{
    let { className, type, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$library$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/web_1_autocinema/src/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/web_1_autocinema/src/components/movies/HeroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$ui$2f$SeedLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/components/ui/SeedLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$library$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/library/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function HeroSection(param) {
    let { searchQuery, onSearchChange, onSearchSubmit, featuredMovies, className } = param;
    _s();
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HeroSection.useMemo[stats]": ()=>{
            const totalDuration = featuredMovies.reduce({
                "HeroSection.useMemo[stats].totalDuration": (acc, movie)=>acc + movie.duration
            }["HeroSection.useMemo[stats].totalDuration"], 0);
            return {
                avgDuration: featuredMovies.length ? Math.round(totalDuration / featuredMovies.length) : 90,
                avgRating: featuredMovies.length ? (featuredMovies.reduce({
                    "HeroSection.useMemo[stats]": (acc, movie)=>acc + movie.rating
                }["HeroSection.useMemo[stats]"], 0) / featuredMovies.length).toFixed(1) : "4.0",
                genres: new Set(featuredMovies.flatMap({
                    "HeroSection.useMemo[stats]": (movie)=>movie.genres
                }["HeroSection.useMemo[stats]"])).size
            };
        }
    }["HeroSection.useMemo[stats]"], [
        featuredMovies
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$library$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#141926] via-[#0F172A] to-[#05070d] p-8 text-white shadow-2xl", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex flex-col gap-8 lg:flex-row",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:w-1/2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-sm text-white/70",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    className: "h-4 w-4 text-secondary"
                                }, void 0, false, {
                                    fileName: "[project]/web_1_autocinema/src/components/movies/HeroSection.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                "Curated AI cinema collections"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/web_1_autocinema/src/components/movies/HeroSection.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "mt-3 text-4xl font-semibold leading-tight lg:text-5xl",
                            children: "Discover AI-driven stories, remixed genres, and cinematic experiments."
                        }, void 0, false, {
                            fileName: "[project]/web_1_autocinema/src/components/movies/HeroSection.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-lg text-white/70",
                            children: "Search hundreds of procedurally generated movies loaded directly from our datasets service. No backend, no forms – just cinema."
                        }, void 0, false, {
                            fileName: "[project]/web_1_autocinema/src/components/movies/HeroSection.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "mt-6 flex flex-col gap-3 sm:flex-row",
                            onSubmit: (event)=>{
                                event.preventDefault();
                                onSearchSubmit();
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    type: "search",
                                    value: searchQuery,
                                    onChange: (event)=>onSearchChange(event.target.value),
                                    placeholder: "Search directors, titles, or moods",
                                    className: "flex-1 bg-white/10 text-white placeholder:text-white/60"
                                }, void 0, false, {
                                    fileName: "[project]/web_1_autocinema/src/components/movies/HeroSection.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "submit",
                                    className: "bg-secondary text-black hover:bg-secondary/80",
                                    children: "Search library"
                                }, void 0, false, {
                                    fileName: "[project]/web_1_autocinema/src/components/movies/HeroSection.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/web_1_autocinema/src/components/movies/HeroSection.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                            className: "mt-8 grid grid-cols-3 gap-4 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border border-white/10 bg-white/5 p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            className: "text-xs uppercase tracking-wide text-white/60",
                                            children: "Average duration"
                                        }, void 0, false, {
                                            fileName: "[project]/web_1_autocinema/src/components/movies/HeroSection.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            className: "mt-2 text-3xl font-bold text-white",
                                            children: [
                                                stats.avgDuration,
                                                "m"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/web_1_autocinema/src/components/movies/HeroSection.tsx",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/web_1_autocinema/src/components/movies/HeroSection.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border border-white/10 bg-white/5 p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            className: "text-xs uppercase tracking-wide text-white/60",
                                            children: "Average rating"
                                        }, void 0, false, {
                                            fileName: "[project]/web_1_autocinema/src/components/movies/HeroSection.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            className: "mt-2 text-3xl font-bold text-white",
                                            children: stats.avgRating
                                        }, void 0, false, {
                                            fileName: "[project]/web_1_autocinema/src/components/movies/HeroSection.tsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/web_1_autocinema/src/components/movies/HeroSection.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border border-white/10 bg-white/5 p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            className: "text-xs uppercase tracking-wide text-white/60",
                                            children: "Genres"
                                        }, void 0, false, {
                                            fileName: "[project]/web_1_autocinema/src/components/movies/HeroSection.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            className: "mt-2 text-3xl font-bold text-white",
                                            children: stats.genres
                                        }, void 0, false, {
                                            fileName: "[project]/web_1_autocinema/src/components/movies/HeroSection.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/web_1_autocinema/src/components/movies/HeroSection.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/web_1_autocinema/src/components/movies/HeroSection.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/web_1_autocinema/src/components/movies/HeroSection.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-4 lg:w-1/2",
                    id: "genres",
                    children: featuredMovies.slice(0, 2).map((movie)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between text-xs uppercase text-white/60",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: movie.genres[0] || "Cinematic"
                                        }, void 0, false, {
                                            fileName: "[project]/web_1_autocinema/src/components/movies/HeroSection.tsx",
                                            lineNumber: 96,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1 text-secondary",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                    className: "h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/web_1_autocinema/src/components/movies/HeroSection.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 19
                                                }, this),
                                                "Trending"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/web_1_autocinema/src/components/movies/HeroSection.tsx",
                                            lineNumber: 97,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/web_1_autocinema/src/components/movies/HeroSection.tsx",
                                    lineNumber: 95,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mt-2 text-xl font-semibold text-white",
                                    children: movie.title
                                }, void 0, false, {
                                    fileName: "[project]/web_1_autocinema/src/components/movies/HeroSection.tsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-sm text-white/70",
                                    children: movie.synopsis
                                }, void 0, false, {
                                    fileName: "[project]/web_1_autocinema/src/components/movies/HeroSection.tsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 flex flex-wrap gap-2 text-xs text-white/60",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-full border border-white/15 px-3 py-1",
                                            children: movie.year
                                        }, void 0, false, {
                                            fileName: "[project]/web_1_autocinema/src/components/movies/HeroSection.tsx",
                                            lineNumber: 105,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-full border border-white/15 px-3 py-1",
                                            children: [
                                                movie.duration,
                                                "m"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/web_1_autocinema/src/components/movies/HeroSection.tsx",
                                            lineNumber: 106,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-full border border-white/15 px-3 py-1",
                                            children: [
                                                "⭐ ",
                                                movie.rating
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/web_1_autocinema/src/components/movies/HeroSection.tsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/web_1_autocinema/src/components/movies/HeroSection.tsx",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$ui$2f$SeedLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SeedLink"], {
                                    href: "/movies/".concat(movie.id),
                                    className: "mt-4 inline-flex text-sm text-secondary transition hover:text-secondary/80",
                                    children: "View detail →"
                                }, void 0, false, {
                                    fileName: "[project]/web_1_autocinema/src/components/movies/HeroSection.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, movie.id, true, {
                            fileName: "[project]/web_1_autocinema/src/components/movies/HeroSection.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/web_1_autocinema/src/components/movies/HeroSection.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/web_1_autocinema/src/components/movies/HeroSection.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/web_1_autocinema/src/components/movies/HeroSection.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(HeroSection, "3FvJDKtC3yF1gbNv5/WixcrN7Rs=");
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/web_1_autocinema/src/components/movies/FilterBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilterBar",
    ()=>FilterBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/components/ui/button.tsx [app-client] (ecmascript)");
;
;
function FilterBar(param) {
    let { genres, years, selectedGenre, selectedYear, onGenreChange, onYearChange, onClear, totalResults } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "rounded-2xl border border-white/10 bg-white/5 p-4 text-white",
        id: "library",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm uppercase tracking-[0.3em] text-white/60",
                            children: "Our collection"
                        }, void 0, false, {
                            fileName: "[project]/web_1_autocinema/src/components/movies/FilterBar.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-semibold",
                            children: [
                                totalResults,
                                " Curated movies"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/web_1_autocinema/src/components/movies/FilterBar.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/web_1_autocinema/src/components/movies/FilterBar.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-1 flex-wrap items-center gap-3 md:justify-end",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: selectedGenre,
                            onChange: (event)=>onGenreChange(event.target.value),
                            className: "h-[46px] min-w-[140px] rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-secondary",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "All genres"
                                }, void 0, false, {
                                    fileName: "[project]/web_1_autocinema/src/components/movies/FilterBar.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                genres.map((genre)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: genre,
                                        children: genre
                                    }, genre, false, {
                                        fileName: "[project]/web_1_autocinema/src/components/movies/FilterBar.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/web_1_autocinema/src/components/movies/FilterBar.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: selectedYear,
                            onChange: (event)=>onYearChange(event.target.value),
                            className: "h-[46px] min-w-[140px] rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-secondary",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "All years"
                                }, void 0, false, {
                                    fileName: "[project]/web_1_autocinema/src/components/movies/FilterBar.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                years.map((year)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: year,
                                        children: year
                                    }, year, false, {
                                        fileName: "[project]/web_1_autocinema/src/components/movies/FilterBar.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/web_1_autocinema/src/components/movies/FilterBar.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            variant: "ghost",
                            onClick: onClear,
                            className: "h-[46px] rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10",
                            children: "Clear filters"
                        }, void 0, false, {
                            fileName: "[project]/web_1_autocinema/src/components/movies/FilterBar.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/web_1_autocinema/src/components/movies/FilterBar.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/web_1_autocinema/src/components/movies/FilterBar.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/web_1_autocinema/src/components/movies/FilterBar.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = FilterBar;
var _c;
__turbopack_context__.k.register(_c, "FilterBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/web_1_autocinema/src/components/movies/MovieCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MovieCard",
    ()=>MovieCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$ui$2f$SeedLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/components/ui/SeedLink.tsx [app-client] (ecmascript)");
;
;
function MovieCard(param) {
    let { movie, onSelect } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-4 text-white shadow-xl backdrop-blur",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "aspect-[2/3] w-full max-w-[200px] mx-auto rounded-xl bg-cover bg-center",
                style: {
                    backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(".concat(movie.poster, "), url('/media/gallery/default_movie.png')")
                },
                "aria-label": "".concat(movie.title, " poster")
            }, void 0, false, {
                fileName: "[project]/web_1_autocinema/src/components/movies/MovieCard.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-1 flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs uppercase tracking-wide text-white/50",
                        children: [
                            movie.genres.slice(0, 2).join(" · "),
                            " — ",
                            movie.year
                        ]
                    }, void 0, true, {
                        fileName: "[project]/web_1_autocinema/src/components/movies/MovieCard.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold leading-tight",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$ui$2f$SeedLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SeedLink"], {
                            href: "/movies/".concat(movie.id),
                            children: movie.title
                        }, void 0, false, {
                            fileName: "[project]/web_1_autocinema/src/components/movies/MovieCard.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/web_1_autocinema/src/components/movies/MovieCard.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "flex-1 text-sm text-white/70",
                        children: movie.synopsis
                    }, void 0, false, {
                        fileName: "[project]/web_1_autocinema/src/components/movies/MovieCard.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 text-xs text-white/70",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-full border border-white/15 px-3 py-1",
                                children: [
                                    movie.duration,
                                    "m"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/web_1_autocinema/src/components/movies/MovieCard.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-full border border-white/15 px-3 py-1",
                                children: [
                                    "⭐ ",
                                    movie.rating
                                ]
                            }, void 0, true, {
                                fileName: "[project]/web_1_autocinema/src/components/movies/MovieCard.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-full border border-white/15 px-3 py-1",
                                children: movie.director
                            }, void 0, false, {
                                fileName: "[project]/web_1_autocinema/src/components/movies/MovieCard.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/web_1_autocinema/src/components/movies/MovieCard.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$ui$2f$SeedLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SeedLink"], {
                        href: "/movies/".concat(movie.id),
                        onClick: ()=>onSelect === null || onSelect === void 0 ? void 0 : onSelect(movie),
                        className: "mt-2 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20",
                        children: "View detail"
                    }, void 0, false, {
                        fileName: "[project]/web_1_autocinema/src/components/movies/MovieCard.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/web_1_autocinema/src/components/movies/MovieCard.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/web_1_autocinema/src/components/movies/MovieCard.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = MovieCard;
var _c;
__turbopack_context__.k.register(_c, "MovieCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/web_1_autocinema/src/components/movies/MovieGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MovieGrid",
    ()=>MovieGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$movies$2f$MovieCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/components/movies/MovieCard.tsx [app-client] (ecmascript)");
;
;
function MovieGrid(param) {
    let { movies, onSelectMovie, layoutClass } = param;
    if (!movies.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl border border-dashed border-white/20 bg-white/5 p-12 text-center text-white/70",
            children: "No movies found. Try a different genre or year."
        }, void 0, false, {
            fileName: "[project]/web_1_autocinema/src/components/movies/MovieGrid.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this);
    }
    // Always use 3 columns on large screens, ignore layout variants
    // Force grid layout regardless of layoutClass prop
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        children: movies.map((movie)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$movies$2f$MovieCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MovieCard"], {
                movie: movie,
                onSelect: onSelectMovie
            }, movie.id, false, {
                fileName: "[project]/web_1_autocinema/src/components/movies/MovieGrid.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/web_1_autocinema/src/components/movies/MovieGrid.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = MovieGrid;
var _c;
__turbopack_context__.k.register(_c, "MovieGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/web_1_autocinema/src/components/movies/SpotlightRow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpotlightRow",
    ()=>SpotlightRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$ui$2f$SeedLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/components/ui/SeedLink.tsx [app-client] (ecmascript)");
;
;
function SpotlightRow(param) {
    let { title, description, movies } = param;
    if (!movies.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-baseline justify-between text-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-semibold",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/web_1_autocinema/src/components/movies/SpotlightRow.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-white/70",
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/web_1_autocinema/src/components/movies/SpotlightRow.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/web_1_autocinema/src/components/movies/SpotlightRow.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/web_1_autocinema/src/components/movies/SpotlightRow.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 overflow-x-auto pb-4",
                children: movies.map((movie)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-[220px] rounded-2xl border border-white/10 bg-white/5 p-4 text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "aspect-video rounded-xl bg-cover bg-center",
                                style: {
                                    backgroundImage: "linear-gradient(180deg, rgba(5,7,13,0.2), rgba(5,7,13,0.7)), url(".concat(movie.poster, "), url('/media/gallery/default_movie.png')")
                                }
                            }, void 0, false, {
                                fileName: "[project]/web_1_autocinema/src/components/movies/SpotlightRow.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-sm uppercase text-white/50",
                                children: movie.genres[0] || "Genre"
                            }, void 0, false, {
                                fileName: "[project]/web_1_autocinema/src/components/movies/SpotlightRow.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-semibold leading-tight",
                                children: movie.title
                            }, void 0, false, {
                                fileName: "[project]/web_1_autocinema/src/components/movies/SpotlightRow.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-white/70",
                                children: movie.director
                            }, void 0, false, {
                                fileName: "[project]/web_1_autocinema/src/components/movies/SpotlightRow.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$ui$2f$SeedLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SeedLink"], {
                                href: "/movies/".concat(movie.id),
                                className: "mt-3 inline-flex text-xs uppercase tracking-wide text-secondary",
                                children: "Details →"
                            }, void 0, false, {
                                fileName: "[project]/web_1_autocinema/src/components/movies/SpotlightRow.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this)
                        ]
                    }, movie.id, true, {
                        fileName: "[project]/web_1_autocinema/src/components/movies/SpotlightRow.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/web_1_autocinema/src/components/movies/SpotlightRow.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/web_1_autocinema/src/components/movies/SpotlightRow.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = SpotlightRow;
var _c;
__turbopack_context__.k.register(_c, "SpotlightRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/web_1_autocinema/src/hooks/useSeedRouter.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSeedRouter",
    ()=>useSeedRouter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$context$2f$SeedContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/context/SeedContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function useSeedRouter() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { getNavigationUrl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$context$2f$SeedContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSeed"])();
    const push = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSeedRouter.useCallback[push]": (href, options)=>{
            const urlWithSeed = getNavigationUrl(href);
            return router.push(urlWithSeed, options);
        }
    }["useSeedRouter.useCallback[push]"], [
        router,
        getNavigationUrl
    ]);
    const replace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSeedRouter.useCallback[replace]": (href, options)=>{
            const urlWithSeed = getNavigationUrl(href);
            return router.replace(urlWithSeed, options);
        }
    }["useSeedRouter.useCallback[replace]"], [
        router,
        getNavigationUrl
    ]);
    return {
        ...router,
        push,
        replace
    };
}
_s(useSeedRouter, "+9yW/Zrx9OnkdRppQV/QxhjYfkw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$context$2f$SeedContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSeed"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/web_1_autocinema/src/components/contact/ContactSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactSection",
    ()=>ContactSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$library$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/library/events.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ContactSection() {
    _s();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [subject, setSubject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const handleSubmit = (event)=>{
        event.preventDefault();
        if (!name.trim() || !email.trim() || !message.trim()) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$library$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logEvent"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$library$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_TYPES"].CONTACT, {
            name: name.trim(),
            email: email.trim(),
            subject: subject.trim(),
            message: message.trim()
        });
        setStatus("sent");
        setMessage("");
        setSubject("");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "rounded-3xl border border-white/10 bg-gradient-to-br from-[#05070d] via-[#0d101c] to-[#020306] p-6 text-white shadow-2xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-6 md:grid-cols-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs uppercase tracking-[0.3em] text-secondary",
                            children: "Contact"
                        }, void 0, false, {
                            fileName: "[project]/web_1_autocinema/src/components/contact/ContactSection.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-3 text-3xl font-semibold",
                            children: "Need a new cinematic brief?"
                        }, void 0, false, {
                            fileName: "[project]/web_1_autocinema/src/components/contact/ContactSection.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-sm text-white/70",
                            children: "Share your validation request (user journey, seed, constraints) and we'll route it to the appropriate web agent. Every submission is logged as an event for easy auditing."
                        }, void 0, false, {
                            fileName: "[project]/web_1_autocinema/src/components/contact/ContactSection.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "mt-4 space-y-2 text-sm text-white/70",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "• Custom hero/layout mixes"
                                }, void 0, false, {
                                    fileName: "[project]/web_1_autocinema/src/components/contact/ContactSection.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "• Seed curation for movie drops"
                                }, void 0, false, {
                                    fileName: "[project]/web_1_autocinema/src/components/contact/ContactSection.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "• Issues spotted by miners"
                                }, void 0, false, {
                                    fileName: "[project]/web_1_autocinema/src/components/contact/ContactSection.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/web_1_autocinema/src/components/contact/ContactSection.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        status === "sent" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-3 py-2 text-sm text-emerald-200",
                            children: "Message logged. Thanks for keeping the reel alive."
                        }, void 0, false, {
                            fileName: "[project]/web_1_autocinema/src/components/contact/ContactSection.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/web_1_autocinema/src/components/contact/ContactSection.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: "space-y-4",
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-xs uppercase tracking-wide text-white/50",
                            children: [
                                "Name",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    value: name,
                                    onChange: (event)=>setName(event.target.value),
                                    className: "mt-1 bg-black/40 text-white",
                                    placeholder: "Your name"
                                }, void 0, false, {
                                    fileName: "[project]/web_1_autocinema/src/components/contact/ContactSection.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/web_1_autocinema/src/components/contact/ContactSection.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-xs uppercase tracking-wide text-white/50",
                            children: [
                                "Email",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    type: "email",
                                    value: email,
                                    onChange: (event)=>setEmail(event.target.value),
                                    className: "mt-1 bg-black/40 text-white",
                                    placeholder: "you@example.com"
                                }, void 0, false, {
                                    fileName: "[project]/web_1_autocinema/src/components/contact/ContactSection.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/web_1_autocinema/src/components/contact/ContactSection.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-xs uppercase tracking-wide text-white/50",
                            children: [
                                "Subject",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    value: subject,
                                    onChange: (event)=>setSubject(event.target.value),
                                    className: "mt-1 bg-black/40 text-white",
                                    placeholder: "What do you need?"
                                }, void 0, false, {
                                    fileName: "[project]/web_1_autocinema/src/components/contact/ContactSection.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/web_1_autocinema/src/components/contact/ContactSection.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-xs uppercase tracking-wide text-white/50",
                            children: [
                                "Message",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: message,
                                    onChange: (event)=>setMessage(event.target.value),
                                    className: "mt-1 h-28 w-full rounded-2xl border border-white/10 bg-black/40 p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-secondary",
                                    placeholder: "What scene do you need?"
                                }, void 0, false, {
                                    fileName: "[project]/web_1_autocinema/src/components/contact/ContactSection.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/web_1_autocinema/src/components/contact/ContactSection.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "submit",
                            className: "w-full bg-secondary text-black hover:bg-secondary/80",
                            children: "Send request"
                        }, void 0, false, {
                            fileName: "[project]/web_1_autocinema/src/components/contact/ContactSection.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/web_1_autocinema/src/components/contact/ContactSection.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/web_1_autocinema/src/components/contact/ContactSection.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/web_1_autocinema/src/components/contact/ContactSection.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(ContactSection, "HBEAG8RQpnRy0GxWf0I2fXIChTo=");
_c = ContactSection;
var _c;
__turbopack_context__.k.register(_c, "ContactSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/web_1_autocinema/src/components/ui/Pagination.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Pagination",
    ()=>Pagination
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$hooks$2f$useSeedRouter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/hooks/useSeedRouter.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Pagination(param) {
    let { currentPage, totalPages, totalItems } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$hooks$2f$useSeedRouter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSeedRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    if (totalPages <= 1) return null;
    const goToPage = (page)=>{
        if (page < 1 || page > totalPages) return;
        const params = new URLSearchParams(searchParams.toString());
        if (page === 1) {
            params.delete("page");
        } else {
            params.set("page", page.toString());
        }
        const query = params.toString();
        const url = query ? "".concat(pathname, "?").concat(query) : pathname;
        router.push(url);
    };
    const startItem = (currentPage - 1) * 9 + 1;
    const endItem = Math.min(currentPage * 9, totalItems);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-4 sm:flex-row sm:justify-between",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-white/70",
                children: [
                    "Showing ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-white",
                        children: startItem
                    }, void 0, false, {
                        fileName: "[project]/web_1_autocinema/src/components/ui/Pagination.tsx",
                        lineNumber: 42,
                        columnNumber: 17
                    }, this),
                    " to",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-white",
                        children: endItem
                    }, void 0, false, {
                        fileName: "[project]/web_1_autocinema/src/components/ui/Pagination.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    " of",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-white",
                        children: totalItems
                    }, void 0, false, {
                        fileName: "[project]/web_1_autocinema/src/components/ui/Pagination.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    " movies"
                ]
            }, void 0, true, {
                fileName: "[project]/web_1_autocinema/src/components/ui/Pagination.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "sm",
                        onClick: ()=>goToPage(currentPage - 1),
                        disabled: currentPage === 1,
                        className: "border border-white/10 text-white hover:bg-white/10 disabled:opacity-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/web_1_autocinema/src/components/ui/Pagination.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            "Previous"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/web_1_autocinema/src/components/ui/Pagination.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: Array.from({
                            length: totalPages
                        }, (_, i)=>i + 1).map((page)=>{
                            // Show first page, last page, current page, and pages around current
                            const showPage = page === 1 || page === totalPages || page >= currentPage - 1 && page <= currentPage + 1;
                            if (!showPage) {
                                // Show ellipsis
                                const prevPage = page - 1;
                                if (prevPage === 1 || prevPage === currentPage - 2 || prevPage === totalPages - 2) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2 text-white/50",
                                        children: "..."
                                    }, page, false, {
                                        fileName: "[project]/web_1_autocinema/src/components/ui/Pagination.tsx",
                                        lineNumber: 76,
                                        columnNumber: 19
                                    }, this);
                                }
                                return null;
                            }
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: currentPage === page ? "default" : "ghost",
                                size: "sm",
                                onClick: ()=>goToPage(page),
                                className: "min-w-[40px] ".concat(currentPage === page ? "bg-secondary text-black hover:bg-secondary/80" : "border border-white/10 text-white hover:bg-white/10"),
                                children: page
                            }, page, false, {
                                fileName: "[project]/web_1_autocinema/src/components/ui/Pagination.tsx",
                                lineNumber: 85,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/web_1_autocinema/src/components/ui/Pagination.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "sm",
                        onClick: ()=>goToPage(currentPage + 1),
                        disabled: currentPage === totalPages,
                        className: "border border-white/10 text-white hover:bg-white/10 disabled:opacity-50",
                        children: [
                            "Next",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/web_1_autocinema/src/components/ui/Pagination.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/web_1_autocinema/src/components/ui/Pagination.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/web_1_autocinema/src/components/ui/Pagination.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/web_1_autocinema/src/components/ui/Pagination.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(Pagination, "JkqajKK10rHI6FVQvHn1jE/mD3s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$hooks$2f$useSeedRouter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSeedRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = Pagination;
var _c;
__turbopack_context__.k.register(_c, "Pagination");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/web_1_autocinema/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$movies$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/components/movies/HeroSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$movies$2f$FilterBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/components/movies/FilterBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$movies$2f$MovieGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/components/movies/MovieGrid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$movies$2f$SpotlightRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/components/movies/SpotlightRow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$library$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/library/events.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v2$2d$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/dynamic/v2-data/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v2$2d$data$2f$data$2d$provider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/dynamic/v2-data/data-provider.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v1$2d$layouts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/dynamic/v1-layouts/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v1$2d$layouts$2f$layouts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/dynamic/v1-layouts/layouts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$context$2f$SeedContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/context/SeedContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$hooks$2f$useSeedRouter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/hooks/useSeedRouter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$contact$2f$ContactSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/components/contact/ContactSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$ui$2f$Pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/components/ui/Pagination.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
const MOVIES_PER_PAGE = 9;
function HomeContent() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$hooks$2f$useSeedRouter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSeedRouter"])();
    const { seed, resolvedSeeds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$context$2f$SeedContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSeed"])();
    var _resolvedSeeds_v1;
    const layoutSeed = (_resolvedSeeds_v1 = resolvedSeeds.v1) !== null && _resolvedSeeds_v1 !== void 0 ? _resolvedSeeds_v1 : seed;
    const layoutConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v2$2d$data$2f$data$2d$provider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLayoutConfig"])(layoutSeed);
    const layoutClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v1$2d$layouts$2f$layouts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLayoutClasses"])(layoutConfig);
    const isSeedThree = seed === 3;
    var _searchParams_get;
    const initialSearch = (_searchParams_get = searchParams.get("search")) !== null && _searchParams_get !== void 0 ? _searchParams_get : "";
    var _searchParams_get1;
    const initialGenre = (_searchParams_get1 = searchParams.get("genre")) !== null && _searchParams_get1 !== void 0 ? _searchParams_get1 : "";
    var _searchParams_get2;
    const initialYear = (_searchParams_get2 = searchParams.get("year")) !== null && _searchParams_get2 !== void 0 ? _searchParams_get2 : "";
    const currentPage = Number.parseInt(searchParams.get("page") || "1", 10);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialSearch);
    const [selectedGenre, setSelectedGenre] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialGenre);
    const [selectedYear, setSelectedYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialYear);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeContent.useEffect": ()=>{
            setSearchQuery(initialSearch);
            setSelectedGenre(initialGenre);
            setSelectedYear(initialYear);
        }
    }["HomeContent.useEffect"], [
        initialSearch,
        initialGenre,
        initialYear
    ]);
    const featuredMovies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomeContent.useMemo[featuredMovies]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v2$2d$data$2f$data$2d$provider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFeaturedMovies"])(4)
    }["HomeContent.useMemo[featuredMovies]"], []);
    const genres = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomeContent.useMemo[genres]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v2$2d$data$2f$data$2d$provider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAvailableGenres"])()
    }["HomeContent.useMemo[genres]"], []);
    const years = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomeContent.useMemo[years]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v2$2d$data$2f$data$2d$provider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAvailableYears"])()
    }["HomeContent.useMemo[years]"], []);
    const filteredMovies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomeContent.useMemo[filteredMovies]": ()=>{
            const yearValue = selectedYear ? Number.parseInt(selectedYear, 10) : undefined;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v2$2d$data$2f$data$2d$provider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchMovies"])(searchQuery, {
                genre: selectedGenre || undefined,
                year: yearValue
            });
        }
    }["HomeContent.useMemo[filteredMovies]"], [
        searchQuery,
        selectedGenre,
        selectedYear
    ]);
    const totalPages = Math.ceil(filteredMovies.length / MOVIES_PER_PAGE);
    const paginatedMovies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomeContent.useMemo[paginatedMovies]": ()=>{
            const startIndex = (currentPage - 1) * MOVIES_PER_PAGE;
            return filteredMovies.slice(startIndex, startIndex + MOVIES_PER_PAGE);
        }
    }["HomeContent.useMemo[paginatedMovies]"], [
        filteredMovies,
        currentPage
    ]);
    const updateQueryString = (next)=>{
        const params = new URLSearchParams(searchParams.toString());
        params.delete("seed");
        params.delete("page"); // Reset to page 1 when filters change
        if (next.search !== undefined) {
            if (next.search) params.set("search", next.search);
            else params.delete("search");
        }
        if (next.genre !== undefined) {
            if (next.genre) params.set("genre", next.genre);
            else params.delete("genre");
        }
        if (next.year !== undefined) {
            if (next.year) params.set("year", next.year);
            else params.delete("year");
        }
        const query = params.toString();
        router.push(query ? "/?".concat(query) : "/");
    };
    const normalizeYearValue = (value)=>{
        if (!value) return null;
        const parsed = Number.parseInt(value, 10);
        return Number.isNaN(parsed) ? null : parsed;
    };
    const handleSearchSubmit = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$library$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logEvent"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$library$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_TYPES"].SEARCH_FILM, {
            query: searchQuery,
            genre: selectedGenre ? {
                name: selectedGenre
            } : undefined,
            year: normalizeYearValue(selectedYear)
        });
        updateQueryString({
            search: searchQuery
        });
    };
    const handleGenreChange = (value)=>{
        setSelectedGenre(value);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$library$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logEvent"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$library$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_TYPES"].FILTER_FILM, {
            genre: value ? {
                name: value
            } : undefined,
            year: normalizeYearValue(selectedYear)
        });
        updateQueryString({
            genre: value
        });
    };
    const handleYearChange = (value)=>{
        setSelectedYear(value);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$library$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logEvent"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$library$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_TYPES"].FILTER_FILM, {
            genre: selectedGenre ? {
                name: selectedGenre
            } : undefined,
            year: normalizeYearValue(value)
        });
        updateQueryString({
            year: value
        });
    };
    const handleClear = ()=>{
        setSelectedGenre("");
        setSelectedYear("");
        setSearchQuery("");
        updateQueryString({
            search: "",
            genre: "",
            year: ""
        });
    };
    const handleSelectMovie = ()=>{
    // reserved for future instrumentation
    };
    const dramaFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomeContent.useMemo[dramaFocus]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v2$2d$data$2f$data$2d$provider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMoviesByGenre"])("Drama").slice(0, 5)
    }["HomeContent.useMemo[dramaFocus]"], []);
    const thrillerFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomeContent.useMemo[thrillerFocus]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v2$2d$data$2f$data$2d$provider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMoviesByGenre"])("Thriller").slice(0, 5)
    }["HomeContent.useMemo[thrillerFocus]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "mx-auto w-full max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 ".concat(layoutClasses.spacing),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$movies$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroSection"], {
                featuredMovies: featuredMovies,
                searchQuery: searchQuery,
                onSearchChange: setSearchQuery,
                onSearchSubmit: handleSearchSubmit,
                className: isSeedThree ? "hero-align-right" : undefined
            }, void 0, false, {
                fileName: "[project]/web_1_autocinema/src/app/page.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$movies$2f$FilterBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilterBar"], {
                genres: genres,
                years: years,
                selectedGenre: selectedGenre,
                selectedYear: selectedYear,
                onGenreChange: handleGenreChange,
                onYearChange: handleYearChange,
                onClear: handleClear,
                totalResults: filteredMovies.length
            }, void 0, false, {
                fileName: "[project]/web_1_autocinema/src/app/page.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$movies$2f$MovieGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MovieGrid"], {
                movies: paginatedMovies,
                onSelectMovie: handleSelectMovie,
                layoutClass: layoutClasses.cards
            }, void 0, false, {
                fileName: "[project]/web_1_autocinema/src/app/page.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            filteredMovies.length > MOVIES_PER_PAGE && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$ui$2f$Pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pagination"], {
                currentPage: currentPage,
                totalPages: totalPages,
                totalItems: filteredMovies.length
            }, void 0, false, {
                fileName: "[project]/web_1_autocinema/src/app/page.tsx",
                lineNumber: 161,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$movies$2f$SpotlightRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpotlightRow"], {
                title: "Drama focus",
                description: "Slow burns, futuristic romances, and everything in between",
                movies: dramaFocus
            }, void 0, false, {
                fileName: "[project]/web_1_autocinema/src/app/page.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$movies$2f$SpotlightRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpotlightRow"], {
                title: "Thriller laboratory",
                description: "High-tension ideas sourced from the dataset variant you picked",
                movies: thrillerFocus
            }, void 0, false, {
                fileName: "[project]/web_1_autocinema/src/app/page.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$contact$2f$ContactSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactSection"], {}, void 0, false, {
                fileName: "[project]/web_1_autocinema/src/app/page.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/web_1_autocinema/src/app/page.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
}
_s(HomeContent, "jM1JzPyJViORPFaBgQJ+5jsf+QM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$hooks$2f$useSeedRouter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSeedRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$context$2f$SeedContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSeed"]
    ];
});
_c = HomeContent;
function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-neutral-950 text-white flex items-center justify-center",
            children: "Loading…"
        }, void 0, false, {
            fileName: "[project]/web_1_autocinema/src/app/page.tsx",
            lineNumber: 185,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HomeContent, {}, void 0, false, {
            fileName: "[project]/web_1_autocinema/src/app/page.tsx",
            lineNumber: 186,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/web_1_autocinema/src/app/page.tsx",
        lineNumber: 185,
        columnNumber: 5
    }, this);
}
_c1 = HomePage;
var _c, _c1;
__turbopack_context__.k.register(_c, "HomeContent");
__turbopack_context__.k.register(_c1, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=web_1_autocinema_src_d1b64fa4._.js.map