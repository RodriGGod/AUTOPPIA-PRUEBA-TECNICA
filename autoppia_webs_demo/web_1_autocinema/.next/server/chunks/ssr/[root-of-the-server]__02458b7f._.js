module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/web_1_autocinema/src/shared/seed-resolver.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Shared seed resolver utilities.
 * Takes a single base seed and derives seeds for each dynamic layer (v1/v2/v3)
 * so we only keep ?seed=XYZ in the URL.
 *
 * Mirrors the logic from webs_server so the mapping stays deterministic.
 */ __turbopack_context__.s([
    "clampBaseSeed",
    ()=>clampBaseSeed,
    "getEnabledFlags",
    ()=>getEnabledFlags,
    "resolveSeeds",
    ()=>resolveSeeds,
    "resolveSeedsSync",
    ()=>resolveSeedsSync,
    "seedResolverConfig",
    ()=>seedResolverConfig
]);
const BOOL_TRUE = [
    "true",
    "1",
    "yes",
    "y"
];
const boolFromEnv = (value)=>{
    if (!value) return false;
    return BOOL_TRUE.includes(value.toLowerCase());
};
function parseEnableDynamicFromUrl() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
    const params = undefined;
    const enableDynamic = undefined;
    const parts = undefined;
}
function getEnabledFlagsInternal() {
    const fromUrl = parseEnableDynamicFromUrl();
    if (fromUrl) return fromUrl;
    return {
        v1: boolFromEnv(("TURBOPACK compile-time value", "true")) || boolFromEnv(("TURBOPACK compile-time value", "true")),
        v2: boolFromEnv(process.env.NEXT_PUBLIC_ENABLE_DYNAMIC_V2_DB_MODE) || boolFromEnv(process.env.ENABLE_DYNAMIC_V2_DB_MODE),
        v3: boolFromEnv(process.env.NEXT_PUBLIC_ENABLE_DYNAMIC_V3) || boolFromEnv(process.env.ENABLE_DYNAMIC_V3)
    };
}
const BASE_SEED = {
    min: 1,
    max: 999,
    defaultValue: 1
};
function clampBaseSeed(seed) {
    if (Number.isNaN(seed)) return BASE_SEED.defaultValue;
    if (seed < BASE_SEED.min) return BASE_SEED.min;
    if (seed > BASE_SEED.max) return BASE_SEED.max;
    return seed;
}
function getApiBaseUrl() {
    const envUrl = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL;
    const origin = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined;
    const envIsLocal = envUrl && (envUrl.includes("localhost") || envUrl.includes("127.0.0.1"));
    const originIsLocal = origin && (origin.includes("localhost") || origin.includes("127.0.0.1"));
    if (envUrl && (!envIsLocal || originIsLocal)) {
        return envUrl;
    }
    if (origin) {
        return `${origin}/api`;
    }
    return envUrl || "http://app:8090";
}
function resolveSeedsLocal(baseSeed, enabledFlags) {
    const safeSeed = clampBaseSeed(baseSeed);
    const flags = enabledFlags || getEnabledFlagsInternal();
    const resolved = {
        base: safeSeed,
        v1: null,
        v2: null,
        v3: null
    };
    if (flags.v1) {
        resolved.v1 = (safeSeed * 37 + 11) % 10 + 1;
    }
    if (flags.v2) {
        resolved.v2 = (safeSeed * 53 + 17) % 300 + 1;
    }
    if (flags.v3) {
        resolved.v3 = (safeSeed * 71 + 3) % 100 + 1;
    }
    return resolved;
}
async function resolveSeeds(baseSeed) {
    const safeSeed = clampBaseSeed(baseSeed);
    const enabledFlags = getEnabledFlagsInternal();
    if ("TURBOPACK compile-time truthy", 1) {
        return resolveSeedsLocal(safeSeed, enabledFlags);
    }
    //TURBOPACK unreachable
    ;
}
function resolveSeedsSync(baseSeed) {
    return resolveSeedsLocal(baseSeed, getEnabledFlagsInternal());
}
function getEnabledFlags() {
    return getEnabledFlagsInternal();
}
const seedResolverConfig = {
    base: BASE_SEED,
    getEnabledFlags
};
}),
"[project]/web_1_autocinema/src/context/SeedContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SeedProvider",
    ()=>SeedProvider,
    "useSeed",
    ()=>useSeed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$shared$2f$seed$2d$resolver$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/shared/seed-resolver.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const DEFAULT_SEED = 1;
const SeedContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    seed: DEFAULT_SEED,
    setSeed: ()=>{},
    getNavigationUrl: (path)=>path,
    resolvedSeeds: (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$shared$2f$seed$2d$resolver$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveSeedsSync"])(DEFAULT_SEED)
});
const STORAGE_KEY = "autocinema_seed_base";
const LAYOUT_MIRRORS = {
    3: 6
};
const applyLayoutOverrides = (baseSeed, seeds)=>{
    const mirrorSeed = LAYOUT_MIRRORS[baseSeed];
    if (!mirrorSeed) return seeds;
    const mirroredSeeds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$shared$2f$seed$2d$resolver$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveSeedsSync"])(mirrorSeed);
    const mirroredLayoutSeed = mirroredSeeds.v1 ?? mirrorSeed;
    if (seeds.v1 === mirroredLayoutSeed) {
        return seeds;
    }
    return {
        ...seeds,
        v1: mirroredLayoutSeed
    };
};
function SeedInitializer({ onSeedFromUrl }) {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const rawSeed = searchParams.get("seed");
        if (rawSeed) {
            const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$shared$2f$seed$2d$resolver$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clampBaseSeed"])(Number.parseInt(rawSeed, 10));
            onSeedFromUrl(parsed);
        } else {
            onSeedFromUrl(null);
        }
    }, [
        searchParams,
        onSeedFromUrl
    ]);
    return null;
}
const SeedProvider = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: children,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SeedProviderInner, {
            children: children
        }, void 0, false, {
            fileName: "[project]/web_1_autocinema/src/context/SeedContext.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/web_1_autocinema/src/context/SeedContext.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
function SeedProviderInner({ children }) {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [seed, setSeedState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_SEED);
    const [resolvedSeeds, setResolvedSeeds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$shared$2f$seed$2d$resolver$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveSeedsSync"])(DEFAULT_SEED));
    const [isInitialized, setIsInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isInitialized) return;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        setIsInitialized(true);
    }, [
        isInitialized
    ]);
    const handleSeedFromUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((urlSeed)=>{
        if (urlSeed !== null) {
            setSeedState(urlSeed);
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let cancelled = false;
        const syncResolved = applyLayoutOverrides(seed, (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$shared$2f$seed$2d$resolver$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveSeedsSync"])(seed));
        setResolvedSeeds(syncResolved);
        console.log("[autocinema][seeds]", `base=${syncResolved.base}`, `layout(v1)=${syncResolved.v1 ?? "disabled"}`, `data(v2)=${syncResolved.v2 ?? "disabled"}`, `v3=${syncResolved.v3 ?? "disabled"}`);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$shared$2f$seed$2d$resolver$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveSeeds"])(seed).then((resolved)=>{
            if (!cancelled) {
                setResolvedSeeds(applyLayoutOverrides(seed, resolved));
                console.log("[autocinema][seeds:update]", `base=${resolved.base}`, `layout(v1)=${resolved.v1 ?? "disabled"}`, `data(v2)=${resolved.v2 ?? "disabled"}`, `v3=${resolved.v3 ?? "disabled"}`);
            }
        }).catch((error)=>{
            if (!cancelled) {
                console.warn("[autocinema] Seed resolver fallback:", error);
            }
        });
        return ()=>{
            cancelled = true;
        };
    }, [
        seed,
        searchParams
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const v2Seed = undefined;
    }, [
        resolvedSeeds.v2,
        resolvedSeeds.base
    ]);
    const setSeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newSeed)=>{
        setSeedState((0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$shared$2f$seed$2d$resolver$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clampBaseSeed"])(newSeed));
    }, []);
    const getNavigationUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((path)=>{
        if (!path) return path;
        if (path.startsWith("http")) return path;
        const currentParams = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : new URLSearchParams();
        const [base, qs] = path.split("?");
        const params = new URLSearchParams(qs || "");
        params.set("seed", seed.toString());
        const enableDynamic = currentParams.get("enable_dynamic");
        if (enableDynamic) {
            params.set("enable_dynamic", enableDynamic);
        }
        const query = params.toString();
        return query ? `${base}?${query}` : base;
    }, [
        seed
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SeedContext.Provider, {
        value: {
            seed,
            setSeed,
            getNavigationUrl,
            resolvedSeeds
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SeedInitializer, {
                onSeedFromUrl: handleSeedFromUrl
            }, void 0, false, {
                fileName: "[project]/web_1_autocinema/src/context/SeedContext.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/web_1_autocinema/src/context/SeedContext.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
}
const useSeed = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(SeedContext);
    if (!context) {
        throw new Error("useSeed must be used within a SeedProvider");
    }
    return context;
};
}),
"[project]/web_1_autocinema/src/components/ui/SeedLink.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SeedLink",
    ()=>SeedLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$context$2f$SeedContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/context/SeedContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function SeedLink({ href, preserveSeed = true, ...props }) {
    const { getNavigationUrl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$context$2f$SeedContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSeed"])();
    // If preserveSeed is false or href starts with http (external link), use original href
    const finalHref = !preserveSeed || href.startsWith('http') ? href : getNavigationUrl(href);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: finalHref,
        ...props
    }, void 0, false, {
        fileName: "[project]/web_1_autocinema/src/components/ui/SeedLink.tsx",
        lineNumber: 21,
        columnNumber: 10
    }, this);
}
}),
"[project]/web_1_autocinema/src/shared/seeded-loader.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchPoolInfo",
    ()=>fetchPoolInfo,
    "fetchSeededSelection",
    ()=>fetchSeededSelection,
    "getSeedValueFromEnv",
    ()=>getSeedValueFromEnv,
    "isDbLoadModeEnabled",
    ()=>isDbLoadModeEnabled
]);
function getApiBaseUrl() {
    const envUrl = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL;
    const origin = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined;
    const envIsLocal = envUrl && (envUrl.includes("localhost") || envUrl.includes("127.0.0.1"));
    const originIsLocal = origin && (origin.includes("localhost") || origin.includes("127.0.0.1"));
    if (envUrl && (!envIsLocal || originIsLocal)) {
        return envUrl;
    }
    if (origin) {
        return `${origin}/api`;
    }
    return envUrl || "http://app:8090";
}
function isDbLoadModeEnabled() {
    const raw = (process.env.NEXT_PUBLIC_ENABLE_DYNAMIC_V2_DB_MODE || process.env.ENABLE_DYNAMIC_V2_DB_MODE || "").toString().toLowerCase();
    return raw === "true";
}
function getSeedValueFromEnv(defaultSeed = 1) {
    // Dataset seed is derived at runtime; env fallback only matters for SSR.
    return defaultSeed;
}
async function fetchSeededSelection(options) {
    // Si el modo DB está deshabilitado, NO hacer ninguna llamada HTTP
    if (!isDbLoadModeEnabled()) {
        console.log(`[seeded-loader] DB mode disabled, skipping API call for ${options.entityType}`);
        return [];
    }
    const baseUrl = getApiBaseUrl();
    const seed = options.seedValue ?? getSeedValueFromEnv(1);
    const limit = options.limit ?? 50;
    const method = options.method ?? "select";
    const params = new URLSearchParams({
        project_key: options.projectKey,
        entity_type: options.entityType,
        seed_value: String(seed),
        limit: String(limit),
        method
    });
    if (options.filterKey) params.set("filter_key", options.filterKey);
    if (options.filterValues && options.filterValues.length > 0) {
        params.set("filter_values", options.filterValues.join(","));
    }
    const url = `${baseUrl}/datasets/load?${params.toString()}`;
    const resp = await fetch(url, {
        method: "GET"
    });
    if (!resp.ok) {
        throw new Error(`Seeded selection request failed: ${resp.status}`);
    }
    const json = await resp.json();
    return json?.data ?? [];
}
async function fetchPoolInfo(projectKey, entityType) {
    const baseUrl = getApiBaseUrl();
    const url = `${baseUrl}/datasets/pool/info?project_key=${encodeURIComponent(projectKey)}&entity_type=${encodeURIComponent(entityType)}`;
    try {
        const resp = await fetch(url, {
            method: "GET"
        });
        if (!resp.ok) return null;
        const json = await resp.json();
        if (json && typeof json.pool_size === "number") {
            return {
                pool_size: json.pool_size
            };
        }
        return null;
    } catch  {
        return null;
    }
}
}),
"[project]/web_1_autocinema/src/data/movies.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCachedMovies",
    ()=>getCachedMovies,
    "initializeMovies",
    ()=>initializeMovies
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$shared$2f$seeded$2d$loader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/shared/seeded-loader.ts [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './original/movies_1.json'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
const DEFAULT_POSTER = "/media/gallery/default_movie.png";
const clampSeed = (value, fallback = 1)=>value >= 1 && value <= 300 ? value : fallback;
const getRuntimeV2Seed = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
    const value = undefined;
};
const resolveSeed = (dbModeEnabled, seedValue)=>{
    if (!dbModeEnabled) {
        return 1;
    }
    if (typeof seedValue === "number" && Number.isFinite(seedValue)) {
        return clampSeed(seedValue);
    }
    const runtimeSeed = getRuntimeV2Seed();
    if (runtimeSeed !== null) {
        return runtimeSeed;
    }
    return 1;
};
const coerceNumber = (value, fallback = 0)=>{
    if (typeof value === "number") return Number.isFinite(value) ? value : fallback;
    if (typeof value === "string") {
        const parsed = Number.parseFloat(value);
        return Number.isNaN(parsed) ? fallback : parsed;
    }
    return fallback;
};
const normalizeGenres = (genres)=>{
    if (Array.isArray(genres)) {
        return genres.filter(Boolean).map((genre)=>genre.trim());
    }
    if (typeof genres === "string") {
        return genres.split(",").map((genre)=>genre.trim()).filter(Boolean);
    }
    return [];
};
const normalizeCast = (cast)=>{
    if (Array.isArray(cast)) {
        return cast.filter(Boolean).map((value)=>value.trim());
    }
    if (typeof cast === "string") {
        return cast.split(",").map((value)=>value.trim()).filter(Boolean);
    }
    return [];
};
const buildPosterPath = (imagePath)=>{
    if (!imagePath) return DEFAULT_POSTER;
    if (imagePath.startsWith("/")) {
        return imagePath;
    }
    return `/media/${imagePath}`;
};
const generateFallbackId = ()=>{
    if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
        return crypto.randomUUID();
    }
    return `movie-${Math.random().toString(36).slice(2, 10)}`;
};
const normalizeMovie = (movie)=>{
    const title = movie.title?.trim() || "Untitled Film";
    const synopsis = movie.description?.trim() || movie.desc?.trim() || "No synopsis available.";
    const year = Math.round(coerceNumber(movie.year, new Date().getFullYear()));
    const duration = Math.round(coerceNumber(movie.duration, 90));
    const rating = Math.min(5, Math.max(0, Number(coerceNumber(movie.rating, 4).toFixed(1))));
    const genres = normalizeGenres(movie.genres);
    const category = movie.category?.trim() || genres[0] || "Drama";
    return {
        id: movie.id || generateFallbackId(),
        title,
        synopsis,
        description: movie.description || movie.desc,
        year,
        duration,
        rating,
        director: movie.director?.trim() || "Unknown Director",
        cast: normalizeCast(movie.cast),
        trailerUrl: movie.trailer_url?.trim(),
        poster: buildPosterPath(movie.image_path),
        genres,
        category,
        imagePath: movie.image_path
    };
};
let moviesCache = [];
async function initializeMovies(v2SeedValue, limit = 300) {
    const dbModeEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$shared$2f$seeded$2d$loader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDbLoadModeEnabled"])();
    if (!dbModeEnabled) {
        moviesCache = fallbackMovies.map(normalizeMovie);
        return moviesCache;
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const effectiveSeed = resolveSeed(dbModeEnabled, v2SeedValue);
    try {
        const movies = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$shared$2f$seeded$2d$loader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchSeededSelection"])({
            projectKey: "web_1_autocinema",
            entityType: "movies",
            seedValue: effectiveSeed,
            limit,
            method: "distribute",
            filterKey: "category"
        });
        if (!Array.isArray(movies) || movies.length === 0) {
            throw new Error(`[autocinema] No movies returned from dataset (seed=${effectiveSeed})`);
        }
        moviesCache = movies.map(normalizeMovie);
        return moviesCache;
    } catch (error) {
        console.warn("[autocinema] Falling back to static movies:", error);
        moviesCache = fallbackMovies.map(normalizeMovie);
        return moviesCache;
    }
}
const getCachedMovies = ()=>moviesCache;
}),
"[project]/web_1_autocinema/src/dynamic/v1-layouts/layouts.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getEffectiveLayoutConfig",
    ()=>getEffectiveLayoutConfig,
    "getLayoutClasses",
    ()=>getLayoutClasses,
    "getSeedLayout",
    ()=>getSeedLayout,
    "isDynamicEnabled",
    ()=>isDynamicEnabled
]);
// LAYOUT FIJO - Layout 16 (correspondiente a seed 36)
// Mobile-first layout - responsive design
const FIXED_LAYOUT = {
    headerOrder: [
        "search",
        "nav",
        "logo"
    ],
    searchPosition: "center",
    navbarStyle: "top",
    contentGrid: "default",
    cardLayout: "column",
    buttonStyle: "rounded",
    footerStyle: "default",
    spacing: "normal",
    borderRadius: "medium",
    colorScheme: "default"
};
function getSeedLayout(seed) {
    // LAYOUT FIJO - Siempre devolver Layout 16 (correspondiente a seed 36)
    return FIXED_LAYOUT;
}
function getLayoutByIndex(layoutIndex) {
    // LAYOUT FIJO - Siempre devolver Layout 16 (correspondiente a seed 36)
    return FIXED_LAYOUT;
}
function getDefaultLayout() {
    // LAYOUT FIJO - Siempre devolver Layout 16 (correspondiente a seed 36)
    return FIXED_LAYOUT;
}
function isDynamicEnabled() {
    return false; // Siempre deshabilitado - el layout nunca cambia (fijado a seed 36, layout 16)
}
function getEffectiveLayoutConfig(seed) {
    // LAYOUT FIJO - Siempre devolver Layout 16 (correspondiente a seed 36)
    return FIXED_LAYOUT;
}
function getLayoutClasses(config) {
    return {
        header: getHeaderClasses(config),
        content: getContentClasses(config),
        cards: getCardClasses(config),
        buttons: getButtonClasses(config),
        footer: getFooterClasses(config),
        spacing: getSpacingClasses(config)
    };
}
function getHeaderClasses(config) {
    const classes = [];
    // Search position
    switch(config.searchPosition){
        case "left":
            classes.push("search-left");
            break;
        case "right":
            classes.push("search-right");
            break;
        case "full-width":
            classes.push("search-full-width");
            break;
        default:
            classes.push("search-center");
    }
    // Navbar style
    switch(config.navbarStyle){
        case "side":
            classes.push("navbar-side");
            break;
        case "hidden-top":
            classes.push("navbar-hidden-top");
            break;
        case "floating":
            classes.push("navbar-floating");
            break;
        default:
            classes.push("navbar-top");
    }
    return classes.join(" ");
}
function getContentClasses(config) {
    const classes = [];
    switch(config.contentGrid){
        case "reverse":
            classes.push("content-reverse");
            break;
        case "centered":
            classes.push("content-centered");
            break;
        case "wide":
            classes.push("content-wide");
            break;
        case "narrow":
            classes.push("content-narrow");
            break;
        default:
            classes.push("content-default");
    }
    return classes.join(" ");
}
function getCardClasses(config) {
    const classes = [];
    switch(config.cardLayout){
        case "row":
            classes.push("cards-row");
            break;
        case "column":
            classes.push("cards-column");
            break;
        case "masonry":
            classes.push("cards-masonry");
            break;
        default:
            classes.push("cards-grid");
    }
    return classes.join(" ");
}
function getButtonClasses(config) {
    const classes = [];
    switch(config.buttonStyle){
        case "rounded":
            classes.push("buttons-rounded");
            break;
        case "outlined":
            classes.push("buttons-outlined");
            break;
        case "minimal":
            classes.push("buttons-minimal");
            break;
        default:
            classes.push("buttons-default");
    }
    return classes.join(" ");
}
function getFooterClasses(config) {
    const classes = [];
    switch(config.footerStyle){
        case "minimal":
            classes.push("footer-minimal");
            break;
        case "expanded":
            classes.push("footer-expanded");
            break;
        case "centered":
            classes.push("footer-centered");
            break;
        default:
            classes.push("footer-default");
    }
    return classes.join(" ");
}
function getSpacingClasses(config) {
    const classes = [];
    switch(config.spacing){
        case "tight":
            classes.push("spacing-tight");
            break;
        case "loose":
            classes.push("spacing-loose");
            break;
        default:
            classes.push("spacing-normal");
    }
    return classes.join(" ");
}
}),
"[project]/web_1_autocinema/src/dynamic/v1-layouts/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v1$2d$layouts$2f$layouts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/dynamic/v1-layouts/layouts.ts [app-ssr] (ecmascript)");
;
}),
"[project]/web_1_autocinema/src/dynamic/v2-data/data-provider.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DynamicDataProvider",
    ()=>DynamicDataProvider,
    "dynamicDataProvider",
    ()=>dynamicDataProvider,
    "getAvailableGenres",
    ()=>getAvailableGenres,
    "getAvailableYears",
    ()=>getAvailableYears,
    "getFeaturedMovies",
    ()=>getFeaturedMovies,
    "getLayoutConfig",
    ()=>getLayoutConfig,
    "getMovieById",
    ()=>getMovieById,
    "getMovies",
    ()=>getMovies,
    "getMoviesByGenre",
    ()=>getMoviesByGenre,
    "getRelatedMovies",
    ()=>getRelatedMovies,
    "isDynamicModeEnabled",
    ()=>isDynamicModeEnabled,
    "searchMovies",
    ()=>searchMovies
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$data$2f$movies$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/data/movies.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v1$2d$layouts$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/dynamic/v1-layouts/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v1$2d$layouts$2f$layouts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/dynamic/v1-layouts/layouts.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$shared$2f$seed$2d$resolver$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/shared/seed-resolver.ts [app-ssr] (ecmascript)");
;
;
;
const BASE_SEED_STORAGE_KEY = "autocinema_seed_base";
class DynamicDataProvider {
    static instance;
    movies = [];
    isEnabled = false;
    ready = false;
    readyPromise;
    constructor(){
        this.isEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v1$2d$layouts$2f$layouts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDynamicEnabled"])();
        if ("TURBOPACK compile-time truthy", 1) {
            this.ready = true;
            this.readyPromise = Promise.resolve();
            return;
        }
        //TURBOPACK unreachable
        ;
    }
    static getInstance() {
        if (!DynamicDataProvider.instance) {
            DynamicDataProvider.instance = new DynamicDataProvider();
        }
        return DynamicDataProvider.instance;
    }
    getBaseSeed() {
        if ("TURBOPACK compile-time truthy", 1) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$shared$2f$seed$2d$resolver$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clampBaseSeed"])(1);
        }
        //TURBOPACK unreachable
        ;
    }
    async loadMovies() {
        try {
            this.getBaseSeed();
            this.movies = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$data$2f$movies$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initializeMovies"])();
        } catch (error) {
            console.error("[autocinema] Failed to initialize movies", error);
            throw error;
        } finally{
            this.ready = true;
        }
    }
    isReady() {
        return this.ready;
    }
    whenReady() {
        return this.readyPromise;
    }
    getMovies() {
        return this.movies;
    }
    getMovieById(id) {
        return this.movies.find((movie)=>movie.id === id);
    }
    getFeaturedMovies(count = 6) {
        return this.movies.slice(0, count);
    }
    findRelatedMovies(movieId, limit = 4) {
        const current = this.getMovieById(movieId);
        const pool = this.movies.filter((movie)=>movie.id !== movieId);
        if (current && current.genres.length > 0) {
            const primaryGenre = current.genres[0];
            const sameGenre = pool.filter((movie)=>movie.genres.includes(primaryGenre));
            if (sameGenre.length >= limit) {
                return sameGenre.slice(0, limit);
            }
        }
        return pool.slice(0, limit);
    }
    searchMovies(query, filters) {
        const normalizedQuery = query.trim().toLowerCase();
        return this.movies.filter((movie)=>{
            const matchesQuery = normalizedQuery.length === 0 || movie.title.toLowerCase().includes(normalizedQuery) || movie.synopsis.toLowerCase().includes(normalizedQuery) || movie.director.toLowerCase().includes(normalizedQuery) || movie.cast.some((actor)=>actor.toLowerCase().includes(normalizedQuery));
            const matchesGenre = !filters?.genre || movie.genres.includes(filters.genre);
            const matchesYear = !filters?.year || movie.year === filters.year;
            return matchesQuery && matchesGenre && matchesYear;
        });
    }
    getMoviesByGenre(genre) {
        return this.movies.filter((movie)=>movie.genres.includes(genre));
    }
    getAvailableGenres() {
        const genres = new Set();
        this.movies.forEach((movie)=>{
            movie.genres.forEach((genre)=>{
                if (genre) genres.add(genre);
            });
        });
        return Array.from(genres).sort((a, b)=>a.localeCompare(b));
    }
    getAvailableYears() {
        const years = new Set();
        this.movies.forEach((movie)=>{
            if (movie.year) {
                years.add(movie.year);
            }
        });
        return Array.from(years).sort((a, b)=>b - a);
    }
    isDynamicModeEnabled() {
        return this.isEnabled;
    }
    getLayoutConfig(seed) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v1$2d$layouts$2f$layouts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEffectiveLayoutConfig"])(seed);
    }
}
const dynamicDataProvider = DynamicDataProvider.getInstance();
const getMovies = ()=>dynamicDataProvider.getMovies();
const getMovieById = (id)=>dynamicDataProvider.getMovieById(id);
const getFeaturedMovies = (count)=>dynamicDataProvider.getFeaturedMovies(count);
const getRelatedMovies = (movieId, limit)=>dynamicDataProvider.findRelatedMovies(movieId, limit);
const searchMovies = (query, filters)=>dynamicDataProvider.searchMovies(query, filters);
const getMoviesByGenre = (genre)=>dynamicDataProvider.getMoviesByGenre(genre);
const getAvailableGenres = ()=>dynamicDataProvider.getAvailableGenres();
const getAvailableYears = ()=>dynamicDataProvider.getAvailableYears();
const isDynamicModeEnabled = ()=>dynamicDataProvider.isDynamicModeEnabled();
const getLayoutConfig = (seed)=>dynamicDataProvider.getLayoutConfig(seed);
}),
"[project]/web_1_autocinema/src/dynamic/v2-data/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "whenReady",
    ()=>whenReady
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v2$2d$data$2f$data$2d$provider$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/dynamic/v2-data/data-provider.ts [app-ssr] (ecmascript)");
;
const whenReady = ()=>dynamicDataProvider.whenReady();
}),
"[project]/web_1_autocinema/src/data/users.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "USERS",
    ()=>USERS,
    "findUser",
    ()=>findUser
]);
const TOTAL_USERS = 256;
const MOVIE_POOL_SIZE = 120;
const padMovieId = (value)=>value.toString().padStart(3, "0");
const USERS = Array.from({
    length: TOTAL_USERS
}, (_, index)=>{
    const movieIndex = index % MOVIE_POOL_SIZE + 1;
    return {
        username: `user${index + 1}`,
        password: "PASSWORD",
        allowedMovies: [
            `movie-v2-${padMovieId(movieIndex)}`
        ]
    };
});
function findUser(username) {
    return USERS.find((user)=>user.username.toLowerCase() === username.toLowerCase());
}
}),
"[project]/web_1_autocinema/src/library/events.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/logger.ts
__turbopack_context__.s([
    "EVENT_TYPES",
    ()=>EVENT_TYPES,
    "logEvent",
    ()=>logEvent
]);
const EVENT_TYPES = {
    REGISTRATION: "REGISTRATION",
    REGISTER_FAILURE: "REGISTER_FAILURE",
    LOGIN: "LOGIN",
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_FAILURE: "LOGIN_FAILURE",
    LOGOUT: "LOGOUT",
    EDIT_USER: "EDIT_USER",
    FILM_DETAIL: "FILM_DETAIL",
    ADD_FILM: "ADD_FILM",
    EDIT_FILM: "EDIT_FILM",
    DELETE_FILM: "DELETE_FILM",
    SEARCH_FILM: "SEARCH_FILM",
    FILTER_FILM: "FILTER_FILM",
    ADD_COMMENT: "ADD_COMMENT",
    CONTACT: "CONTACT",
    WATCH_TRAILER: "WATCH_TRAILER",
    ADD_TO_WATCHLIST: "ADD_TO_WATCHLIST",
    SHARE_MOVIE: "SHARE_MOVIE"
};
function logEvent(eventType, data = {}, extra_headers = {}) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    let user;
    const webAgentId = undefined;
    const validatorId = undefined;
    const resolvedWebAgentId = undefined;
    const resolvedValidatorId = undefined;
    // Construir el payload completo que espera el backend
    const eventData = undefined;
    const backendPayload = undefined;
}
}),
"[project]/web_1_autocinema/src/shared/storage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isBrowser",
    ()=>isBrowser,
    "readJson",
    ()=>readJson,
    "readString",
    ()=>readString,
    "writeJson",
    ()=>writeJson,
    "writeString",
    ()=>writeString
]);
const isBrowser = ()=>"undefined" !== "undefined";
function readJson(key, defaultValue = null) {
    if (!isBrowser()) return defaultValue;
    //TURBOPACK unreachable
    ;
}
function writeJson(key, value) {
    if (!isBrowser()) return;
    //TURBOPACK unreachable
    ;
}
function readString(key, defaultValue = null) {
    if (!isBrowser()) return defaultValue;
    //TURBOPACK unreachable
    ;
}
function writeString(key, value) {
    if (!isBrowser()) return;
    //TURBOPACK unreachable
    ;
}
}),
"[project]/web_1_autocinema/src/context/AuthContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$data$2f$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/data/users.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$library$2f$events$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/library/events.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$shared$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/shared/storage.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const STORAGE_KEY = "autocinemaUser";
const CUSTOM_USERS_KEY = "autocinemaCustomUsers";
const loadCustomUsers = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
};
const saveCustomUsers = (users)=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
};
const matchCustomUser = (users, username)=>{
    const normalized = username.toLowerCase();
    return users.find((user)=>user.username.toLowerCase() === normalized);
};
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const normalizeUsername = (value)=>value.trim();
const getStoredCustomUsers = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$shared$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readJson"])(CUSTOM_USERS_KEY, []) ?? [];
const persistCustomUsers = (users)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$shared$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["writeJson"])(CUSTOM_USERS_KEY, users);
};
const AuthProvider = ({ children })=>{
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [customUsers, setCustomUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                const parsed = JSON.parse(stored);
                setCurrentUser(parsed);
            }
        } catch  {
        // ignore corrupted storage
        }
        setCustomUsers(getStoredCustomUsers());
    }, []);
    const resolveUserRecord = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((username)=>{
        const normalized = normalizeUsername(username);
        if (!normalized) return undefined;
        const existing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$data$2f$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findUser"])(normalized);
        if (existing) return existing;
        const lower = normalized.toLowerCase();
        const localMatch = customUsers.find((user)=>user.username.toLowerCase() === lower);
        if (localMatch) {
            return localMatch;
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return undefined;
    }, [
        customUsers
    ]);
    const persistUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((authUser, source)=>{
        setCurrentUser(authUser);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(authUser));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$library$2f$events$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logEvent"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$library$2f$events$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVENT_TYPES"].LOGIN_SUCCESS, {
            username: authUser.username,
            source
        });
    }, []);
    const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (username, password)=>{
        const record = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$data$2f$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findUser"])(username);
        if (record && record.password === password) {
            const authUser = {
                username: record.username,
                allowedMovies: record.allowedMovies
            };
            persistUser(authUser, "login");
            return;
        }
        const customUsers = loadCustomUsers();
        const custom = matchCustomUser(customUsers, username);
        if (custom && custom.password === password) {
            const authUser = {
                username: custom.username,
                allowedMovies: custom.allowedMovies
            };
            persistUser(authUser, "login");
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$library$2f$events$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logEvent"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$library$2f$events$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVENT_TYPES"].LOGIN_FAILURE, {
            username
        });
        throw new Error("Invalid credentials");
    }, [
        persistUser
    ]);
    const resolveOrCreateAllowedMovies = (username, requested)=>{
        if (requested && requested.length > 0) {
            return requested;
        }
        const hash = username.split("").reduce((sum, char)=>sum + char.charCodeAt(0), 0);
        const movieIndex = hash % 120 + 1;
        const movieId = `movie-v2-${movieIndex.toString().padStart(3, "0")}`;
        return [
            movieId
        ];
    };
    const register = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ({ username, password, allowedMovies })=>{
        const safeUsername = normalizeUsername(username);
        const safePassword = password.trim();
        if (!safeUsername) {
            throw new Error("Username is required");
        }
        if (!safePassword) {
            throw new Error("Password is required");
        }
        const existingRecord = resolveUserRecord(safeUsername);
        if (existingRecord) {
            if (existingRecord.password !== safePassword) {
                throw new Error("Username already registered with different credentials.");
            }
            const authUser = {
                username: existingRecord.username,
                allowedMovies: existingRecord.allowedMovies
            };
            persistUser(authUser, "login");
            return;
        }
        const customUsers = loadCustomUsers();
        const nextCustomUsers = [
            ...customUsers,
            {
                username: safeUsername,
                allowedMovies: resolveOrCreateAllowedMovies(safeUsername, allowedMovies),
                password: safePassword
            }
        ];
        saveCustomUsers(nextCustomUsers);
        persistCustomUsers(nextCustomUsers);
        setCustomUsers((prev)=>{
            const hasUser = prev.some((user)=>user.username.toLowerCase() === safeUsername.toLowerCase());
            if (hasUser) {
                return prev;
            }
            return [
                ...prev,
                {
                    username: safeUsername,
                    password: safePassword,
                    allowedMovies: nextCustomUsers[nextCustomUsers.length - 1].allowedMovies
                }
            ];
        });
        const authUser = {
            username: safeUsername,
            allowedMovies: nextCustomUsers[nextCustomUsers.length - 1].allowedMovies
        };
        persistUser(authUser, "register");
    }, [
        persistUser,
        resolveUserRecord,
        setCustomUsers
    ]);
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (currentUser) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$library$2f$events$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logEvent"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$library$2f$events$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVENT_TYPES"].LOGOUT, {
                username: currentUser.username
            });
        }
        setCurrentUser(null);
        localStorage.removeItem(STORAGE_KEY);
    }, [
        currentUser
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            currentUser,
            isAuthenticated: Boolean(currentUser),
            login,
            register,
            logout
        }), [
        currentUser,
        login,
        logout,
        register
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/web_1_autocinema/src/context/AuthContext.tsx",
        lineNumber: 234,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const useAuth = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
}),
"[project]/web_1_autocinema/src/components/layout/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/lucide-react/dist/esm/icons/film.js [app-ssr] (ecmascript) <export default as Film>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$ui$2f$SeedLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/components/ui/SeedLink.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$context$2f$SeedContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/context/SeedContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v2$2d$data$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/dynamic/v2-data/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v2$2d$data$2f$data$2d$provider$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/dynamic/v2-data/data-provider.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v1$2d$layouts$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/dynamic/v1-layouts/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v1$2d$layouts$2f$layouts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/dynamic/v1-layouts/layouts.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/context/AuthContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const NAV_LINKS = [
    {
        label: "Home",
        href: "/",
        preserveSeed: true
    },
    {
        label: "Library",
        href: "#library",
        preserveSeed: false
    },
    {
        label: "Genres",
        href: "#genres",
        preserveSeed: false
    },
    {
        label: "About",
        href: "#about",
        preserveSeed: false
    },
    {
        label: "Contact",
        href: "#contact",
        preserveSeed: false
    }
];
function Header() {
    const { seed, resolvedSeeds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$context$2f$SeedContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSeed"])();
    const { currentUser, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const layoutSeed = resolvedSeeds.v1 ?? seed;
    const layoutConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v2$2d$data$2f$data$2d$provider$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLayoutConfig"])(layoutSeed);
    const layoutClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v1$2d$layouts$2f$layouts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLayoutClasses"])(layoutConfig);
    const isSeedThree = seed === 3;
    const floatingAlignmentClass = layoutClasses.header.includes("navbar-floating") ? isSeedThree ? "navbar-floating-left" : "navbar-floating-right" : "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `mx-auto flex w-full flex-col gap-2 px-6 py-4 md:flex-row md:items-center md:justify-between ${layoutClasses.header} ${floatingAlignmentClass}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$ui$2f$SeedLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SeedLink"], {
                        href: "/",
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__["Film"], {
                                className: "h-6 w-6 text-secondary"
                            }, void 0, false, {
                                fileName: "[project]/web_1_autocinema/src/components/layout/Header.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-semibold uppercase tracking-widest",
                                        children: "Autocinema"
                                    }, void 0, false, {
                                        fileName: "[project]/web_1_autocinema/src/components/layout/Header.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs uppercase text-white/50",
                                        children: "AI Film Library"
                                    }, void 0, false, {
                                        fileName: "[project]/web_1_autocinema/src/components/layout/Header.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/web_1_autocinema/src/components/layout/Header.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/web_1_autocinema/src/components/layout/Header.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/web_1_autocinema/src/components/layout/Header.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex flex-wrap items-center gap-4 text-sm text-white/70",
                    children: [
                        NAV_LINKS.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$ui$2f$SeedLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SeedLink"], {
                                href: link.href,
                                preserveSeed: link.preserveSeed,
                                className: "transition hover:text-white",
                                children: link.label
                            }, link.label, false, {
                                fileName: "[project]/web_1_autocinema/src/components/layout/Header.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this)),
                        currentUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$ui$2f$SeedLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SeedLink"], {
                                    href: "/profile",
                                    className: "font-semibold text-secondary",
                                    children: currentUser.username
                                }, void 0, false, {
                                    fileName: "[project]/web_1_autocinema/src/components/layout/Header.tsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: logout,
                                    className: "text-xs uppercase tracking-wide text-white/60 hover:text-white",
                                    children: "Logout"
                                }, void 0, false, {
                                    fileName: "[project]/web_1_autocinema/src/components/layout/Header.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$ui$2f$SeedLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SeedLink"], {
                                    href: "/register",
                                    className: "font-semibold text-secondary",
                                    children: "Register"
                                }, void 0, false, {
                                    fileName: "[project]/web_1_autocinema/src/components/layout/Header.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$ui$2f$SeedLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SeedLink"], {
                                    href: "/login",
                                    className: "text-white/80 hover:text-white",
                                    children: "Login"
                                }, void 0, false, {
                                    fileName: "[project]/web_1_autocinema/src/components/layout/Header.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/web_1_autocinema/src/components/layout/Header.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/web_1_autocinema/src/components/layout/Header.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/web_1_autocinema/src/components/layout/Header.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/web_1_autocinema/src/components/layout/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$context$2f$SeedContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/context/SeedContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v2$2d$data$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/dynamic/v2-data/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v2$2d$data$2f$data$2d$provider$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/dynamic/v2-data/data-provider.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v1$2d$layouts$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/dynamic/v1-layouts/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v1$2d$layouts$2f$layouts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/dynamic/v1-layouts/layouts.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Footer() {
    const { seed, resolvedSeeds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$context$2f$SeedContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSeed"])();
    const layoutSeed = resolvedSeeds.v1 ?? seed;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v2$2d$data$2f$data$2d$provider$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLayoutConfig"])(layoutSeed);
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v1$2d$layouts$2f$layouts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLayoutClasses"])(config);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: `border-t border-white/10 bg-neutral-950/90 text-white/70 ${classes.footer}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-4xl px-6 py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm uppercase tracking-[0.3em] text-secondary",
                            children: "Autocinema"
                        }, void 0, false, {
                            fileName: "[project]/web_1_autocinema/src/components/layout/Footer.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "mt-3 text-2xl font-semibold text-white",
                            children: "Your ultimate movie search engine."
                        }, void 0, false, {
                            fileName: "[project]/web_1_autocinema/src/components/layout/Footer.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-base text-white/70 leading-relaxed max-w-2xl mx-auto",
                            children: "Find the perfect movie in seconds. From timeless classics to the latest releases, our search engine lets you explore thousands of films by genre, decade, style, or mood. Type what you're looking for and start discovering. Whether you're in the mood for a heart-wrenching drama, an edge-of-your-seat thriller, or a mind-bending sci-fi adventure, your next cinematic obsession is waiting."
                        }, void 0, false, {
                            fileName: "[project]/web_1_autocinema/src/components/layout/Footer.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/web_1_autocinema/src/components/layout/Footer.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/web_1_autocinema/src/components/layout/Footer.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-white/5 bg-neutral-950/70",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex w-full flex-col gap-3 px-6 py-4 text-xs text-white/50 md:flex-row md:items-center md:justify-between",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "© ",
                            new Date().getFullYear(),
                            " Autoppia Experiments"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/web_1_autocinema/src/components/layout/Footer.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/web_1_autocinema/src/components/layout/Footer.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/web_1_autocinema/src/components/layout/Footer.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/web_1_autocinema/src/components/layout/Footer.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/web_1_autocinema/src/components/layout/BodyWrapper.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BodyWrapper",
    ()=>BodyWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$context$2f$SeedContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/context/SeedContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v2$2d$data$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/dynamic/v2-data/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v2$2d$data$2f$data$2d$provider$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/dynamic/v2-data/data-provider.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function BodyWrapper({ children }) {
    const { seed, resolvedSeeds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$context$2f$SeedContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSeed"])();
    const layoutSeed = resolvedSeeds.v1 ?? seed;
    const layoutConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v2$2d$data$2f$data$2d$provider$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLayoutConfig"])(layoutSeed);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Remove any existing navbar classes
        document.body.classList.remove('navbar-side', 'navbar-hidden-top', 'navbar-floating', 'navbar-top');
        // Add the appropriate navbar class based on layout config
        switch(layoutConfig.navbarStyle){
            case 'side':
                document.body.classList.add('navbar-side');
                break;
            case 'hidden-top':
                document.body.classList.add('navbar-hidden-top');
                break;
            case 'floating':
                document.body.classList.add('navbar-floating');
                break;
            default:
                document.body.classList.add('navbar-top');
        }
    }, [
        layoutConfig.navbarStyle
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const params = undefined;
        const assignParam = undefined;
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
"[project]/web_1_autocinema/src/components/layout/DataReadyGate.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataReadyGate",
    ()=>DataReadyGate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v2$2d$data$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/dynamic/v2-data/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v2$2d$data$2f$data$2d$provider$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/dynamic/v2-data/data-provider.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function DataReadyGate({ children }) {
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v2$2d$data$2f$data$2d$provider$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dynamicDataProvider"].isReady());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (ready) return;
        let mounted = true;
        __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v2$2d$data$2f$data$2d$provider$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dynamicDataProvider"].whenReady().then(()=>{
            if (!mounted) return;
            setReady(true);
        }).catch((error)=>{
            console.error("[autocinema] Data load failed", error);
            if (!mounted) return;
            setReady(true);
        });
        return ()=>{
            mounted = false;
        };
    }, [
        ready
    ]);
    if (!ready) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-100 flex items-center justify-center text-gray-700",
            children: "Loading film library…"
        }, void 0, false, {
            fileName: "[project]/web_1_autocinema/src/components/layout/DataReadyGate.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
"[project]/web_1_autocinema/src/components/layout/SeedRedirect.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SeedRedirect",
    ()=>SeedRedirect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
/**
 * Default seed to use when no seed is in the URL.
 * Layout está fijado al correspondiente a seed 36 (layout 16).
 */ const DEFAULT_SEED = 36;
function SeedRedirect() {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const hasRedirectedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Only run on client side
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        // Check if seed parameter exists in URL
        const seedParam = undefined;
        const params = undefined;
        const newUrl = undefined;
    }, [
        searchParams,
        pathname,
        router
    ]);
    return null; // This component doesn't render anything
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__02458b7f._.js.map