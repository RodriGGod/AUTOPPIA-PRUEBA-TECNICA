(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/web_1_autocinema/src/shared/seed-resolver.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
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
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const params = new URLSearchParams(window.location.search);
    const enableDynamic = params.get("enable_dynamic");
    if (!enableDynamic) return null;
    const parts = enableDynamic.toLowerCase().split(",").map((s)=>s.trim());
    return {
        v1: parts.includes("v1"),
        v2: parts.includes("v2"),
        v3: parts.includes("v3")
    };
}
function getEnabledFlagsInternal() {
    const fromUrl = parseEnableDynamicFromUrl();
    if (fromUrl) return fromUrl;
    return {
        v1: boolFromEnv(("TURBOPACK compile-time value", "true")) || boolFromEnv(("TURBOPACK compile-time value", "true")),
        v2: boolFromEnv(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_ENABLE_DYNAMIC_V2_DB_MODE) || boolFromEnv(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.ENABLE_DYNAMIC_V2_DB_MODE),
        v3: boolFromEnv(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_ENABLE_DYNAMIC_V3) || boolFromEnv(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.ENABLE_DYNAMIC_V3)
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
    var _window_location;
    const envUrl = __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.API_URL;
    const origin = ("TURBOPACK compile-time truthy", 1) ? (_window_location = window.location) === null || _window_location === void 0 ? void 0 : _window_location.origin : "TURBOPACK unreachable";
    const envIsLocal = envUrl && (envUrl.includes("localhost") || envUrl.includes("127.0.0.1"));
    const originIsLocal = origin && (origin.includes("localhost") || origin.includes("127.0.0.1"));
    if (envUrl && (!envIsLocal || originIsLocal)) {
        return envUrl;
    }
    if (origin) {
        return "".concat(origin, "/api");
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
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const apiUrl = getApiBaseUrl();
        const url = new URL("".concat(apiUrl, "/seeds/resolve"));
        url.searchParams.set("seed", safeSeed.toString());
        url.searchParams.set("v1_enabled", String(enabledFlags.v1));
        url.searchParams.set("v2_enabled", String(enabledFlags.v2));
        url.searchParams.set("v3_enabled", String(enabledFlags.v3));
        const response = await fetch(url.toString(), {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error("Seed resolution API failed: ".concat(response.status));
        }
        const data = await response.json();
        var _data_base, _data_v1, _data_v2, _data_v3;
        return {
            base: (_data_base = data.base) !== null && _data_base !== void 0 ? _data_base : safeSeed,
            v1: (_data_v1 = data.v1) !== null && _data_v1 !== void 0 ? _data_v1 : null,
            v2: (_data_v2 = data.v2) !== null && _data_v2 !== void 0 ? _data_v2 : null,
            v3: (_data_v3 = data.v3) !== null && _data_v3 !== void 0 ? _data_v3 : null
        };
    } catch (error) {
        console.warn("[seed-resolver] API call failed, using local fallback:", error);
        return resolveSeedsLocal(safeSeed, enabledFlags);
    }
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/web_1_autocinema/src/context/SeedContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SeedProvider",
    ()=>SeedProvider,
    "useSeed",
    ()=>useSeed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$shared$2f$seed$2d$resolver$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/shared/seed-resolver.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
const DEFAULT_SEED = 1;
const SeedContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    seed: DEFAULT_SEED,
    setSeed: ()=>{},
    getNavigationUrl: (path)=>path,
    resolvedSeeds: (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$shared$2f$seed$2d$resolver$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSeedsSync"])(DEFAULT_SEED)
});
const STORAGE_KEY = "autocinema_seed_base";
const LAYOUT_MIRRORS = {
    3: 6
};
const applyLayoutOverrides = (baseSeed, seeds)=>{
    const mirrorSeed = LAYOUT_MIRRORS[baseSeed];
    if (!mirrorSeed) return seeds;
    const mirroredSeeds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$shared$2f$seed$2d$resolver$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSeedsSync"])(mirrorSeed);
    var _mirroredSeeds_v1;
    const mirroredLayoutSeed = (_mirroredSeeds_v1 = mirroredSeeds.v1) !== null && _mirroredSeeds_v1 !== void 0 ? _mirroredSeeds_v1 : mirrorSeed;
    if (seeds.v1 === mirroredLayoutSeed) {
        return seeds;
    }
    return {
        ...seeds,
        v1: mirroredLayoutSeed
    };
};
function SeedInitializer(param) {
    let { onSeedFromUrl } = param;
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SeedInitializer.useEffect": ()=>{
            const rawSeed = searchParams.get("seed");
            if (rawSeed) {
                const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$shared$2f$seed$2d$resolver$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clampBaseSeed"])(Number.parseInt(rawSeed, 10));
                onSeedFromUrl(parsed);
            } else {
                onSeedFromUrl(null);
            }
        }
    }["SeedInitializer.useEffect"], [
        searchParams,
        onSeedFromUrl
    ]);
    return null;
}
_s(SeedInitializer, "wpYCjx3Iuh0YGg4csUQIo9F8Zhk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = SeedInitializer;
const SeedProvider = (param)=>{
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: children,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SeedProviderInner, {
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
_c1 = SeedProvider;
function SeedProviderInner(param) {
    let { children } = param;
    _s1();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [seed, setSeedState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_SEED);
    const [resolvedSeeds, setResolvedSeeds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "SeedProviderInner.useState": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$shared$2f$seed$2d$resolver$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSeedsSync"])(DEFAULT_SEED)
    }["SeedProviderInner.useState"]);
    const [isInitialized, setIsInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SeedProviderInner.useEffect": ()=>{
            if (isInitialized) return;
            if ("TURBOPACK compile-time truthy", 1) {
                try {
                    const saved = localStorage.getItem(STORAGE_KEY);
                    if (saved) {
                        const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$shared$2f$seed$2d$resolver$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clampBaseSeed"])(Number.parseInt(saved, 10));
                        setSeedState(parsed);
                    }
                } catch (error) {
                    console.error("Error loading seed:", error);
                }
            }
            setIsInitialized(true);
        }
    }["SeedProviderInner.useEffect"], [
        isInitialized
    ]);
    const handleSeedFromUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SeedProviderInner.useCallback[handleSeedFromUrl]": (urlSeed)=>{
            if (urlSeed !== null) {
                setSeedState(urlSeed);
                if ("TURBOPACK compile-time truthy", 1) {
                    try {
                        localStorage.setItem(STORAGE_KEY, urlSeed.toString());
                    } catch (error) {
                        console.error("Error saving seed to localStorage:", error);
                    }
                }
            }
        }
    }["SeedProviderInner.useCallback[handleSeedFromUrl]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SeedProviderInner.useEffect": ()=>{
            let cancelled = false;
            const syncResolved = applyLayoutOverrides(seed, (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$shared$2f$seed$2d$resolver$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSeedsSync"])(seed));
            setResolvedSeeds(syncResolved);
            var _syncResolved_v1, _syncResolved_v2, _syncResolved_v3;
            console.log("[autocinema][seeds]", "base=".concat(syncResolved.base), "layout(v1)=".concat((_syncResolved_v1 = syncResolved.v1) !== null && _syncResolved_v1 !== void 0 ? _syncResolved_v1 : "disabled"), "data(v2)=".concat((_syncResolved_v2 = syncResolved.v2) !== null && _syncResolved_v2 !== void 0 ? _syncResolved_v2 : "disabled"), "v3=".concat((_syncResolved_v3 = syncResolved.v3) !== null && _syncResolved_v3 !== void 0 ? _syncResolved_v3 : "disabled"));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$shared$2f$seed$2d$resolver$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveSeeds"])(seed).then({
                "SeedProviderInner.useEffect": (resolved)=>{
                    if (!cancelled) {
                        setResolvedSeeds(applyLayoutOverrides(seed, resolved));
                        var _resolved_v1, _resolved_v2, _resolved_v3;
                        console.log("[autocinema][seeds:update]", "base=".concat(resolved.base), "layout(v1)=".concat((_resolved_v1 = resolved.v1) !== null && _resolved_v1 !== void 0 ? _resolved_v1 : "disabled"), "data(v2)=".concat((_resolved_v2 = resolved.v2) !== null && _resolved_v2 !== void 0 ? _resolved_v2 : "disabled"), "v3=".concat((_resolved_v3 = resolved.v3) !== null && _resolved_v3 !== void 0 ? _resolved_v3 : "disabled"));
                    }
                }
            }["SeedProviderInner.useEffect"]).catch({
                "SeedProviderInner.useEffect": (error)=>{
                    if (!cancelled) {
                        console.warn("[autocinema] Seed resolver fallback:", error);
                    }
                }
            }["SeedProviderInner.useEffect"]);
            return ({
                "SeedProviderInner.useEffect": ()=>{
                    cancelled = true;
                }
            })["SeedProviderInner.useEffect"];
        }
    }["SeedProviderInner.useEffect"], [
        seed,
        searchParams
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SeedProviderInner.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            var _resolvedSeeds_v2, _ref;
            const v2Seed = (_ref = (_resolvedSeeds_v2 = resolvedSeeds.v2) !== null && _resolvedSeeds_v2 !== void 0 ? _resolvedSeeds_v2 : resolvedSeeds.base) !== null && _ref !== void 0 ? _ref : null;
            window.__autocinemaV2Seed = v2Seed;
            window.dispatchEvent(new CustomEvent("autocinema:v2SeedChange", {
                detail: {
                    seed: v2Seed
                }
            }));
        }
    }["SeedProviderInner.useEffect"], [
        resolvedSeeds.v2,
        resolvedSeeds.base
    ]);
    const setSeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SeedProviderInner.useCallback[setSeed]": (newSeed)=>{
            setSeedState((0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$shared$2f$seed$2d$resolver$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clampBaseSeed"])(newSeed));
        }
    }["SeedProviderInner.useCallback[setSeed]"], []);
    const getNavigationUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SeedProviderInner.useCallback[getNavigationUrl]": (path)=>{
            if (!path) return path;
            if (path.startsWith("http")) return path;
            const currentParams = ("TURBOPACK compile-time truthy", 1) ? new URLSearchParams(window.location.search) : "TURBOPACK unreachable";
            const [base, qs] = path.split("?");
            const params = new URLSearchParams(qs || "");
            params.set("seed", seed.toString());
            const enableDynamic = currentParams.get("enable_dynamic");
            if (enableDynamic) {
                params.set("enable_dynamic", enableDynamic);
            }
            const query = params.toString();
            return query ? "".concat(base, "?").concat(query) : base;
        }
    }["SeedProviderInner.useCallback[getNavigationUrl]"], [
        seed
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SeedContext.Provider, {
        value: {
            seed,
            setSeed,
            getNavigationUrl,
            resolvedSeeds
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SeedInitializer, {
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
_s1(SeedProviderInner, "OB1yKoeAb2t9eiVkG2YM72l0zUE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c2 = SeedProviderInner;
const useSeed = ()=>{
    _s2();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SeedContext);
    if (!context) {
        throw new Error("useSeed must be used within a SeedProvider");
    }
    return context;
};
_s2(useSeed, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "SeedInitializer");
__turbopack_context__.k.register(_c1, "SeedProvider");
__turbopack_context__.k.register(_c2, "SeedProviderInner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/web_1_autocinema/src/components/ui/SeedLink.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SeedLink",
    ()=>SeedLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$context$2f$SeedContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/context/SeedContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function SeedLink(param) {
    let { href, preserveSeed = true, ...props } = param;
    _s();
    const { getNavigationUrl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$context$2f$SeedContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSeed"])();
    // If preserveSeed is false or href starts with http (external link), use original href
    const finalHref = !preserveSeed || href.startsWith('http') ? href : getNavigationUrl(href);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: finalHref,
        ...props
    }, void 0, false, {
        fileName: "[project]/web_1_autocinema/src/components/ui/SeedLink.tsx",
        lineNumber: 21,
        columnNumber: 10
    }, this);
}
_s(SeedLink, "3zSaxlh1iNyeXYcCxIMVtpl+o7U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$context$2f$SeedContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSeed"]
    ];
});
_c = SeedLink;
var _c;
__turbopack_context__.k.register(_c, "SeedLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/web_1_autocinema/src/shared/seeded-loader.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function getApiBaseUrl() {
    var _window_location;
    const envUrl = __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.API_URL;
    const origin = ("TURBOPACK compile-time truthy", 1) ? (_window_location = window.location) === null || _window_location === void 0 ? void 0 : _window_location.origin : "TURBOPACK unreachable";
    const envIsLocal = envUrl && (envUrl.includes("localhost") || envUrl.includes("127.0.0.1"));
    const originIsLocal = origin && (origin.includes("localhost") || origin.includes("127.0.0.1"));
    if (envUrl && (!envIsLocal || originIsLocal)) {
        return envUrl;
    }
    if (origin) {
        return "".concat(origin, "/api");
    }
    return envUrl || "http://app:8090";
}
function isDbLoadModeEnabled() {
    const raw = (__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_ENABLE_DYNAMIC_V2_DB_MODE || __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.ENABLE_DYNAMIC_V2_DB_MODE || "").toString().toLowerCase();
    return raw === "true";
}
function getSeedValueFromEnv() {
    let defaultSeed = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    // Dataset seed is derived at runtime; env fallback only matters for SSR.
    return defaultSeed;
}
async function fetchSeededSelection(options) {
    // Si el modo DB está deshabilitado, NO hacer ninguna llamada HTTP
    if (!isDbLoadModeEnabled()) {
        console.log("[seeded-loader] DB mode disabled, skipping API call for ".concat(options.entityType));
        return [];
    }
    const baseUrl = getApiBaseUrl();
    var _options_seedValue;
    const seed = (_options_seedValue = options.seedValue) !== null && _options_seedValue !== void 0 ? _options_seedValue : getSeedValueFromEnv(1);
    var _options_limit;
    const limit = (_options_limit = options.limit) !== null && _options_limit !== void 0 ? _options_limit : 50;
    var _options_method;
    const method = (_options_method = options.method) !== null && _options_method !== void 0 ? _options_method : "select";
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
    const url = "".concat(baseUrl, "/datasets/load?").concat(params.toString());
    const resp = await fetch(url, {
        method: "GET"
    });
    if (!resp.ok) {
        throw new Error("Seeded selection request failed: ".concat(resp.status));
    }
    const json = await resp.json();
    var _json_data;
    return (_json_data = json === null || json === void 0 ? void 0 : json.data) !== null && _json_data !== void 0 ? _json_data : [];
}
async function fetchPoolInfo(projectKey, entityType) {
    const baseUrl = getApiBaseUrl();
    const url = "".concat(baseUrl, "/datasets/pool/info?project_key=").concat(encodeURIComponent(projectKey), "&entity_type=").concat(encodeURIComponent(entityType));
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
    } catch (e) {
        return null;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/web_1_autocinema/src/data/movies.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCachedMovies",
    ()=>getCachedMovies,
    "initializeMovies",
    ()=>initializeMovies
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$shared$2f$seeded$2d$loader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/shared/seeded-loader.ts [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './original/movies_1.json'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
const DEFAULT_POSTER = "/media/gallery/default_movie.png";
const clampSeed = function(value) {
    let fallback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    return value >= 1 && value <= 300 ? value : fallback;
};
const getRuntimeV2Seed = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const value = window.__autocinemaV2Seed;
    if (typeof value === "number" && Number.isFinite(value)) {
        return clampSeed(value);
    }
    return null;
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
const coerceNumber = function(value) {
    let fallback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
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
    return "/media/".concat(imagePath);
};
const generateFallbackId = ()=>{
    if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
        return crypto.randomUUID();
    }
    return "movie-".concat(Math.random().toString(36).slice(2, 10));
};
const normalizeMovie = (movie)=>{
    var _movie_title, _movie_description, _movie_desc, _movie_category, _movie_director, _movie_trailer_url;
    const title = ((_movie_title = movie.title) === null || _movie_title === void 0 ? void 0 : _movie_title.trim()) || "Untitled Film";
    const synopsis = ((_movie_description = movie.description) === null || _movie_description === void 0 ? void 0 : _movie_description.trim()) || ((_movie_desc = movie.desc) === null || _movie_desc === void 0 ? void 0 : _movie_desc.trim()) || "No synopsis available.";
    const year = Math.round(coerceNumber(movie.year, new Date().getFullYear()));
    const duration = Math.round(coerceNumber(movie.duration, 90));
    const rating = Math.min(5, Math.max(0, Number(coerceNumber(movie.rating, 4).toFixed(1))));
    const genres = normalizeGenres(movie.genres);
    const category = ((_movie_category = movie.category) === null || _movie_category === void 0 ? void 0 : _movie_category.trim()) || genres[0] || "Drama";
    return {
        id: movie.id || generateFallbackId(),
        title,
        synopsis,
        description: movie.description || movie.desc,
        year,
        duration,
        rating,
        director: ((_movie_director = movie.director) === null || _movie_director === void 0 ? void 0 : _movie_director.trim()) || "Unknown Director",
        cast: normalizeCast(movie.cast),
        trailerUrl: (_movie_trailer_url = movie.trailer_url) === null || _movie_trailer_url === void 0 ? void 0 : _movie_trailer_url.trim(),
        poster: buildPosterPath(movie.image_path),
        genres,
        category,
        imagePath: movie.image_path
    };
};
let moviesCache = [];
async function initializeMovies(v2SeedValue) {
    let limit = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 300;
    const dbModeEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$shared$2f$seeded$2d$loader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDbLoadModeEnabled"])();
    if (!dbModeEnabled) {
        moviesCache = fallbackMovies.map(normalizeMovie);
        return moviesCache;
    }
    if (dbModeEnabled && "object" !== "undefined" && v2SeedValue == null) {
        await new Promise((resolve)=>setTimeout(resolve, 75));
    }
    const effectiveSeed = resolveSeed(dbModeEnabled, v2SeedValue);
    try {
        const movies = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$shared$2f$seeded$2d$loader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchSeededSelection"])({
            projectKey: "web_1_autocinema",
            entityType: "movies",
            seedValue: effectiveSeed,
            limit,
            method: "distribute",
            filterKey: "category"
        });
        if (!Array.isArray(movies) || movies.length === 0) {
            throw new Error("[autocinema] No movies returned from dataset (seed=".concat(effectiveSeed, ")"));
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/web_1_autocinema/src/dynamic/v1-layouts/layouts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/web_1_autocinema/src/dynamic/v1-layouts/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v1$2d$layouts$2f$layouts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/dynamic/v1-layouts/layouts.ts [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/web_1_autocinema/src/dynamic/v2-data/data-provider.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$data$2f$movies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/data/movies.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v1$2d$layouts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/dynamic/v1-layouts/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v1$2d$layouts$2f$layouts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/dynamic/v1-layouts/layouts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$shared$2f$seed$2d$resolver$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/shared/seed-resolver.ts [app-client] (ecmascript)");
;
;
;
;
const BASE_SEED_STORAGE_KEY = "autocinema_seed_base";
class DynamicDataProvider {
    static getInstance() {
        if (!DynamicDataProvider.instance) {
            DynamicDataProvider.instance = new DynamicDataProvider();
        }
        return DynamicDataProvider.instance;
    }
    getBaseSeed() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            const params = new URLSearchParams(window.location.search);
            const raw = params.get("seed");
            if (raw) {
                const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$shared$2f$seed$2d$resolver$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clampBaseSeed"])(Number.parseInt(raw, 10));
                window.localStorage.setItem(BASE_SEED_STORAGE_KEY, parsed.toString());
                return parsed;
            }
            const stored = window.localStorage.getItem(BASE_SEED_STORAGE_KEY);
            if (stored) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$shared$2f$seed$2d$resolver$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clampBaseSeed"])(Number.parseInt(stored, 10));
            }
        } catch (error) {
            console.warn("[autocinema] Failed to resolve base seed from URL/localStorage", error);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$shared$2f$seed$2d$resolver$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clampBaseSeed"])(1);
    }
    async loadMovies() {
        try {
            this.getBaseSeed();
            this.movies = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$data$2f$movies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeMovies"])();
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
    getFeaturedMovies() {
        let count = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 6;
        return this.movies.slice(0, count);
    }
    findRelatedMovies(movieId) {
        let limit = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 4;
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
            const matchesGenre = !(filters === null || filters === void 0 ? void 0 : filters.genre) || movie.genres.includes(filters.genre);
            const matchesYear = !(filters === null || filters === void 0 ? void 0 : filters.year) || movie.year === filters.year;
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v1$2d$layouts$2f$layouts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEffectiveLayoutConfig"])(seed);
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "movies", []);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "isEnabled", false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "ready", false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "readyPromise", void 0);
        this.isEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v1$2d$layouts$2f$layouts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDynamicEnabled"])();
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        this.readyPromise = this.loadMovies();
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(DynamicDataProvider, "instance", void 0);
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/web_1_autocinema/src/dynamic/v2-data/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "whenReady",
    ()=>whenReady
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v2$2d$data$2f$data$2d$provider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/dynamic/v2-data/data-provider.ts [app-client] (ecmascript)");
;
const whenReady = ()=>dynamicDataProvider.whenReady();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/web_1_autocinema/src/data/users.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
        username: "user".concat(index + 1),
        password: "PASSWORD",
        allowedMovies: [
            "movie-v2-".concat(padMovieId(movieIndex))
        ]
    };
});
function findUser(username) {
    return USERS.find((user)=>user.username.toLowerCase() === username.toLowerCase());
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/web_1_autocinema/src/library/events.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
function logEvent(eventType) {
    let data = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, extra_headers = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    let user = localStorage.getItem("user");
    if (user === "null") {
        user = null;
    }
    const webAgentId = localStorage.getItem("web_agent_id");
    const validatorId = localStorage.getItem("validator_id");
    const resolvedWebAgentId = webAgentId && webAgentId !== "null" ? webAgentId : "1";
    const resolvedValidatorId = validatorId && validatorId !== "null" ? validatorId : "1";
    // Construir el payload completo que espera el backend
    const eventData = {
        event_name: eventType,
        web_agent_id: resolvedWebAgentId,
        user_id: user,
        data,
        timestamp: new Date().toISOString(),
        validator_id: resolvedValidatorId
    };
    const backendPayload = {
        web_agent_id: resolvedWebAgentId,
        web_url: window.location.origin,
        validator_id: resolvedValidatorId,
        data: eventData
    };
    console.log("🎬 Logging Event:", backendPayload);
    fetch("/api/log-event", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-WebAgent-Id": resolvedWebAgentId,
            "X-Validator-Id": resolvedValidatorId,
            ...extra_headers
        },
        body: JSON.stringify(backendPayload)
    }).catch((error)=>{
        console.error("❌ Failed to log event:", error);
        throw error; // User wants errors to fail
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/web_1_autocinema/src/shared/storage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
const isBrowser = ()=>"object" !== "undefined";
function readJson(key) {
    let defaultValue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!isBrowser()) //TURBOPACK unreachable
    ;
    try {
        const raw = window.localStorage.getItem(key);
        if (!raw) return defaultValue;
        return JSON.parse(raw);
    } catch (e) {
        return defaultValue;
    }
}
function writeJson(key, value) {
    if (!isBrowser()) //TURBOPACK unreachable
    ;
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
    // ignore
    }
}
function readString(key) {
    let defaultValue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!isBrowser()) //TURBOPACK unreachable
    ;
    try {
        const raw = window.localStorage.getItem(key);
        return raw !== null && raw !== void 0 ? raw : defaultValue;
    } catch (e) {
        return defaultValue;
    }
}
function writeString(key, value) {
    if (!isBrowser()) //TURBOPACK unreachable
    ;
    try {
        window.localStorage.setItem(key, value);
    } catch (e) {
    // ignore
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/web_1_autocinema/src/context/AuthContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$data$2f$users$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/data/users.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$library$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/library/events.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$shared$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/shared/storage.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const STORAGE_KEY = "autocinemaUser";
const CUSTOM_USERS_KEY = "autocinemaCustomUsers";
const loadCustomUsers = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = localStorage.getItem(CUSTOM_USERS_KEY);
        if (!raw) return [];
        return JSON.parse(raw);
    } catch (e) {
        return [];
    }
};
const saveCustomUsers = (users)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.setItem(CUSTOM_USERS_KEY, JSON.stringify(users));
};
const matchCustomUser = (users, username)=>{
    const normalized = username.toLowerCase();
    return users.find((user)=>user.username.toLowerCase() === normalized);
};
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const normalizeUsername = (value)=>value.trim();
const getStoredCustomUsers = ()=>{
    var _readJson;
    return (_readJson = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$shared$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readJson"])(CUSTOM_USERS_KEY, [])) !== null && _readJson !== void 0 ? _readJson : [];
};
const persistCustomUsers = (users)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$shared$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeJson"])(CUSTOM_USERS_KEY, users);
};
const AuthProvider = (param)=>{
    let { children } = param;
    _s();
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [customUsers, setCustomUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            try {
                const stored = localStorage.getItem(STORAGE_KEY);
                if (stored) {
                    const parsed = JSON.parse(stored);
                    setCurrentUser(parsed);
                }
            } catch (e) {
            // ignore corrupted storage
            }
            setCustomUsers(getStoredCustomUsers());
        }
    }["AuthProvider.useEffect"], []);
    const resolveUserRecord = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[resolveUserRecord]": (username)=>{
            const normalized = normalizeUsername(username);
            if (!normalized) return undefined;
            const existing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$data$2f$users$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findUser"])(normalized);
            if (existing) return existing;
            const lower = normalized.toLowerCase();
            const localMatch = customUsers.find({
                "AuthProvider.useCallback[resolveUserRecord].localMatch": (user)=>user.username.toLowerCase() === lower
            }["AuthProvider.useCallback[resolveUserRecord].localMatch"]);
            if (localMatch) {
                return localMatch;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                const storedMatch = getStoredCustomUsers().find({
                    "AuthProvider.useCallback[resolveUserRecord].storedMatch": (user)=>user.username.toLowerCase() === lower
                }["AuthProvider.useCallback[resolveUserRecord].storedMatch"]);
                if (storedMatch && !localMatch) {
                    setCustomUsers({
                        "AuthProvider.useCallback[resolveUserRecord]": (prev)=>{
                            if (prev.some({
                                "AuthProvider.useCallback[resolveUserRecord]": (user)=>user.username.toLowerCase() === lower
                            }["AuthProvider.useCallback[resolveUserRecord]"])) {
                                return prev;
                            }
                            return [
                                ...prev,
                                storedMatch
                            ];
                        }
                    }["AuthProvider.useCallback[resolveUserRecord]"]);
                    return storedMatch;
                }
            }
            return undefined;
        }
    }["AuthProvider.useCallback[resolveUserRecord]"], [
        customUsers
    ]);
    const persistUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[persistUser]": (authUser, source)=>{
            setCurrentUser(authUser);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(authUser));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$library$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logEvent"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$library$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_TYPES"].LOGIN_SUCCESS, {
                username: authUser.username,
                source
            });
        }
    }["AuthProvider.useCallback[persistUser]"], []);
    const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[login]": async (username, password)=>{
            const record = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$data$2f$users$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findUser"])(username);
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$library$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logEvent"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$library$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_TYPES"].LOGIN_FAILURE, {
                username
            });
            throw new Error("Invalid credentials");
        }
    }["AuthProvider.useCallback[login]"], [
        persistUser
    ]);
    const resolveOrCreateAllowedMovies = (username, requested)=>{
        if (requested && requested.length > 0) {
            return requested;
        }
        const hash = username.split("").reduce((sum, char)=>sum + char.charCodeAt(0), 0);
        const movieIndex = hash % 120 + 1;
        const movieId = "movie-v2-".concat(movieIndex.toString().padStart(3, "0"));
        return [
            movieId
        ];
    };
    const register = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[register]": async (param)=>{
            let { username, password, allowedMovies } = param;
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
            setCustomUsers({
                "AuthProvider.useCallback[register]": (prev)=>{
                    const hasUser = prev.some({
                        "AuthProvider.useCallback[register].hasUser": (user)=>user.username.toLowerCase() === safeUsername.toLowerCase()
                    }["AuthProvider.useCallback[register].hasUser"]);
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
                }
            }["AuthProvider.useCallback[register]"]);
            const authUser = {
                username: safeUsername,
                allowedMovies: nextCustomUsers[nextCustomUsers.length - 1].allowedMovies
            };
            persistUser(authUser, "register");
        }
    }["AuthProvider.useCallback[register]"], [
        persistUser,
        resolveUserRecord,
        setCustomUsers
    ]);
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[logout]": ()=>{
            if (currentUser) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$library$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logEvent"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$library$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_TYPES"].LOGOUT, {
                    username: currentUser.username
                });
            }
            setCurrentUser(null);
            localStorage.removeItem(STORAGE_KEY);
        }
    }["AuthProvider.useCallback[logout]"], [
        currentUser
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AuthProvider.useMemo[value]": ()=>({
                currentUser,
                isAuthenticated: Boolean(currentUser),
                login,
                register,
                logout
            })
    }["AuthProvider.useMemo[value]"], [
        currentUser,
        login,
        logout,
        register
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/web_1_autocinema/src/context/AuthContext.tsx",
        lineNumber: 234,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AuthProvider, "M4BFKE0gJ214OysWsLUPyXOkpUE=");
_c = AuthProvider;
const useAuth = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/web_1_autocinema/src/components/layout/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/lucide-react/dist/esm/icons/film.js [app-client] (ecmascript) <export default as Film>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$ui$2f$SeedLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/components/ui/SeedLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$context$2f$SeedContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/context/SeedContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v2$2d$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/dynamic/v2-data/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v2$2d$data$2f$data$2d$provider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/dynamic/v2-data/data-provider.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v1$2d$layouts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/dynamic/v1-layouts/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v1$2d$layouts$2f$layouts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/dynamic/v1-layouts/layouts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/context/AuthContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    _s();
    const { seed, resolvedSeeds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$context$2f$SeedContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSeed"])();
    const { currentUser, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    var _resolvedSeeds_v1;
    const layoutSeed = (_resolvedSeeds_v1 = resolvedSeeds.v1) !== null && _resolvedSeeds_v1 !== void 0 ? _resolvedSeeds_v1 : seed;
    const layoutConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v2$2d$data$2f$data$2d$provider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLayoutConfig"])(layoutSeed);
    const layoutClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v1$2d$layouts$2f$layouts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLayoutClasses"])(layoutConfig);
    const isSeedThree = seed === 3;
    const floatingAlignmentClass = layoutClasses.header.includes("navbar-floating") ? isSeedThree ? "navbar-floating-left" : "navbar-floating-right" : "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex w-full flex-col gap-2 px-6 py-4 md:flex-row md:items-center md:justify-between ".concat(layoutClasses.header, " ").concat(floatingAlignmentClass),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$ui$2f$SeedLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SeedLink"], {
                        href: "/",
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__["Film"], {
                                className: "h-6 w-6 text-secondary"
                            }, void 0, false, {
                                fileName: "[project]/web_1_autocinema/src/components/layout/Header.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-semibold uppercase tracking-widest",
                                        children: "Autocinema"
                                    }, void 0, false, {
                                        fileName: "[project]/web_1_autocinema/src/components/layout/Header.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex flex-wrap items-center gap-4 text-sm text-white/70",
                    children: [
                        NAV_LINKS.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$ui$2f$SeedLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SeedLink"], {
                                href: link.href,
                                preserveSeed: link.preserveSeed,
                                className: "transition hover:text-white",
                                children: link.label
                            }, link.label, false, {
                                fileName: "[project]/web_1_autocinema/src/components/layout/Header.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this)),
                        currentUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$ui$2f$SeedLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SeedLink"], {
                                    href: "/profile",
                                    className: "font-semibold text-secondary",
                                    children: currentUser.username
                                }, void 0, false, {
                                    fileName: "[project]/web_1_autocinema/src/components/layout/Header.tsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$ui$2f$SeedLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SeedLink"], {
                                    href: "/register",
                                    className: "font-semibold text-secondary",
                                    children: "Register"
                                }, void 0, false, {
                                    fileName: "[project]/web_1_autocinema/src/components/layout/Header.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$components$2f$ui$2f$SeedLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SeedLink"], {
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
_s(Header, "1Y2IcOaK5H3bCchN3KqyfEWM7bw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$context$2f$SeedContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSeed"],
        __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/web_1_autocinema/src/components/layout/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$context$2f$SeedContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/context/SeedContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v2$2d$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/dynamic/v2-data/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v2$2d$data$2f$data$2d$provider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/dynamic/v2-data/data-provider.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v1$2d$layouts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/dynamic/v1-layouts/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v1$2d$layouts$2f$layouts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/dynamic/v1-layouts/layouts.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Footer() {
    _s();
    const { seed, resolvedSeeds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$context$2f$SeedContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSeed"])();
    var _resolvedSeeds_v1;
    const layoutSeed = (_resolvedSeeds_v1 = resolvedSeeds.v1) !== null && _resolvedSeeds_v1 !== void 0 ? _resolvedSeeds_v1 : seed;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v2$2d$data$2f$data$2d$provider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLayoutConfig"])(layoutSeed);
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v1$2d$layouts$2f$layouts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLayoutClasses"])(config);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "border-t border-white/10 bg-neutral-950/90 text-white/70 ".concat(classes.footer),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-4xl px-6 py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm uppercase tracking-[0.3em] text-secondary",
                            children: "Autocinema"
                        }, void 0, false, {
                            fileName: "[project]/web_1_autocinema/src/components/layout/Footer.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "mt-3 text-2xl font-semibold text-white",
                            children: "Your ultimate movie search engine."
                        }, void 0, false, {
                            fileName: "[project]/web_1_autocinema/src/components/layout/Footer.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-white/5 bg-neutral-950/70",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex w-full flex-col gap-3 px-6 py-4 text-xs text-white/50 md:flex-row md:items-center md:justify-between",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_s(Footer, "h7Wxmkvpbh/9MA0C8nyBaQISjLk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$context$2f$SeedContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSeed"]
    ];
});
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/web_1_autocinema/src/components/layout/BodyWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BodyWrapper",
    ()=>BodyWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$context$2f$SeedContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/context/SeedContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v2$2d$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/dynamic/v2-data/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v2$2d$data$2f$data$2d$provider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/dynamic/v2-data/data-provider.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function BodyWrapper(param) {
    let { children } = param;
    _s();
    const { seed, resolvedSeeds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$context$2f$SeedContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSeed"])();
    var _resolvedSeeds_v1;
    const layoutSeed = (_resolvedSeeds_v1 = resolvedSeeds.v1) !== null && _resolvedSeeds_v1 !== void 0 ? _resolvedSeeds_v1 : seed;
    const layoutConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v2$2d$data$2f$data$2d$provider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLayoutConfig"])(layoutSeed);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BodyWrapper.useEffect": ()=>{
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
        }
    }["BodyWrapper.useEffect"], [
        layoutConfig.navbarStyle
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BodyWrapper.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const params = new URLSearchParams(window.location.search);
            const assignParam = {
                "BodyWrapper.useEffect.assignParam": (storageKey, keys, fallback)=>{
                    for (const key of keys){
                        const value = params.get(key);
                        if (value !== null) {
                            localStorage.setItem(storageKey, value || fallback);
                            return;
                        }
                    }
                }
            }["BodyWrapper.useEffect.assignParam"];
            assignParam("web_agent_id", [
                "X-WebAgent-Id",
                "web_agent_id"
            ], "null");
            assignParam("validator_id", [
                "X-Validator-Id",
                "validator_id"
            ], "1");
            assignParam("user", [
                "user"
            ], "null");
        }
    }["BodyWrapper.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s(BodyWrapper, "hPadbziTbUNtLYh8glNGqT1y68E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$context$2f$SeedContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSeed"]
    ];
});
_c = BodyWrapper;
var _c;
__turbopack_context__.k.register(_c, "BodyWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/web_1_autocinema/src/components/layout/DataReadyGate.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataReadyGate",
    ()=>DataReadyGate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v2$2d$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/dynamic/v2-data/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v2$2d$data$2f$data$2d$provider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/src/dynamic/v2-data/data-provider.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function DataReadyGate(param) {
    let { children } = param;
    _s();
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v2$2d$data$2f$data$2d$provider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dynamicDataProvider"].isReady());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DataReadyGate.useEffect": ()=>{
            if (ready) return;
            let mounted = true;
            __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$src$2f$dynamic$2f$v2$2d$data$2f$data$2d$provider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dynamicDataProvider"].whenReady().then({
                "DataReadyGate.useEffect": ()=>{
                    if (!mounted) return;
                    setReady(true);
                }
            }["DataReadyGate.useEffect"]).catch({
                "DataReadyGate.useEffect": (error)=>{
                    console.error("[autocinema] Data load failed", error);
                    if (!mounted) return;
                    setReady(true);
                }
            }["DataReadyGate.useEffect"]);
            return ({
                "DataReadyGate.useEffect": ()=>{
                    mounted = false;
                }
            })["DataReadyGate.useEffect"];
        }
    }["DataReadyGate.useEffect"], [
        ready
    ]);
    if (!ready) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-100 flex items-center justify-center text-gray-700",
            children: "Loading film library…"
        }, void 0, false, {
            fileName: "[project]/web_1_autocinema/src/components/layout/DataReadyGate.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s(DataReadyGate, "0LnyQb1+pELWH+rKH4exW0mvyHs=");
_c = DataReadyGate;
var _c;
__turbopack_context__.k.register(_c, "DataReadyGate");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/web_1_autocinema/src/components/layout/SeedRedirect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SeedRedirect",
    ()=>SeedRedirect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
/**
 * Default seed to use when no seed is in the URL.
 * Layout está fijado al correspondiente a seed 36 (layout 16).
 */ const DEFAULT_SEED = 36;
function SeedRedirect() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const hasRedirectedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SeedRedirect.useEffect": ()=>{
            // Only run on client side
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // Prevent multiple redirects
            if (hasRedirectedRef.current) return;
            // Check if seed parameter exists in URL
            const seedParam = searchParams.get("seed");
            if (seedParam) {
                // Seed exists in URL, no need to redirect
                return;
            }
            // No seed in URL - redirect to add default seed (36)
            hasRedirectedRef.current = true;
            const params = new URLSearchParams(searchParams.toString());
            params.set("seed", DEFAULT_SEED.toString());
            const newUrl = "".concat(pathname, "?").concat(params.toString());
            // Use replace instead of push to avoid adding to history
            router.replace(newUrl);
        }
    }["SeedRedirect.useEffect"], [
        searchParams,
        pathname,
        router
    ]);
    return null; // This component doesn't render anything
}
_s(SeedRedirect, "ZuIT75ttsazxpN/OUx0ztJQALFQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SeedRedirect;
var _c;
__turbopack_context__.k.register(_c, "SeedRedirect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/web_1_autocinema/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/web_1_autocinema/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/web_1_autocinema/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/web_1_autocinema/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/web_1_autocinema/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "mergeClasses",
    ()=>mergeClasses,
    "toKebabCase",
    ()=>toKebabCase
]);
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = function() {
    for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){
        classes[_key] = arguments[_key];
    }
    return classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
};
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/web_1_autocinema/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/web_1_autocinema/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((param, ref)=>{
    let { color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest } = param;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...rest
    }, [
        ...iconNode.map((param)=>{
            let [tag, attrs] = param;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs);
        }),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/web_1_autocinema/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((param, ref)=>{
        let { className, ...props } = param;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide-".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toKebabCase"])(iconName)), className),
            ...props
        });
    });
    Component.displayName = "".concat(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/web_1_autocinema/node_modules/lucide-react/dist/esm/icons/film.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Film
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            key: "afitv7"
        }
    ],
    [
        "path",
        {
            d: "M7 3v18",
            key: "bbkbws"
        }
    ],
    [
        "path",
        {
            d: "M3 7.5h4",
            key: "zfgn84"
        }
    ],
    [
        "path",
        {
            d: "M3 12h18",
            key: "1i2n21"
        }
    ],
    [
        "path",
        {
            d: "M3 16.5h4",
            key: "1230mu"
        }
    ],
    [
        "path",
        {
            d: "M17 3v18",
            key: "in4fa5"
        }
    ],
    [
        "path",
        {
            d: "M17 7.5h4",
            key: "myr1c1"
        }
    ],
    [
        "path",
        {
            d: "M17 16.5h4",
            key: "go4c1d"
        }
    ]
];
const Film = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Film", __iconNode);
;
 //# sourceMappingURL=film.js.map
}),
"[project]/web_1_autocinema/node_modules/lucide-react/dist/esm/icons/film.js [app-client] (ecmascript) <export default as Film>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Film",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web_1_autocinema/node_modules/lucide-react/dist/esm/icons/film.js [app-client] (ecmascript)");
}),
"[project]/web_1_autocinema/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target) {
    for(var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        searchParamsList[_key - 1] = arguments[_key];
    }
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map
}),
"[project]/web_1_autocinema/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/web_1_autocinema/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/web_1_autocinema/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? "[" + hostname + "]" : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && "?" + query || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return "" + protocol + host + pathname + search + hash;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn("Unknown key passed via urlObject into url.format: " + key);
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map
}),
"[project]/web_1_autocinema/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/web_1_autocinema/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (e.g. via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}),
"[project]/web_1_autocinema/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return protocol + "//" + hostname + (port ? ':' + port : '');
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? "?" + urlParts.slice(1).join('?') : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        var _App_prototype;
        if ((_App_prototype = App.prototype) == null ? void 0 : _App_prototype.getInitialProps) {
            const message = '"' + getDisplayName(App) + '.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.';
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = '"' + getDisplayName(App) + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn("" + getDisplayName(App) + " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps");
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = "Cannot find module for page: " + page;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = "Failed to load static file for page: " + page + " " + message;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = "Cannot find the middleware module";
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/web_1_autocinema/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/web_1_autocinema/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/web_1_autocinema/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map
}),
"[project]/web_1_autocinema/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
} //# sourceMappingURL=error-once.js.map
}),
"[project]/web_1_autocinema/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$web_1_autocinema$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/web_1_autocinema/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/web_1_autocinema/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/web_1_autocinema/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/web_1_autocinema/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/web_1_autocinema/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/web_1_autocinema/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/web_1_autocinema/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/web_1_autocinema/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/web_1_autocinema/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/web_1_autocinema/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/web_1_autocinema/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/web_1_autocinema/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _approuterinstance = __turbopack_context__.r("[project]/web_1_autocinema/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/web_1_autocinema/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
const _segmentcache = __turbopack_context__.r("[project]/web_1_autocinema/node_modules/next/dist/client/components/segment-cache.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate) {
    const { nodeName } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === 'A';
    if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
        // ignore click for browser’s default behavior
        return;
    }
    if (!(0, _islocalurl.isLocalURL)(href)) {
        if (replace) {
            // browser default behavior does not replace the history state
            // so we need to do it manually
            e.preventDefault();
            location.replace(href);
        }
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    if (onNavigate) {
        let isDefaultPrevented = false;
        onNavigate({
            preventDefault: ()=>{
                isDefaultPrevented = true;
            }
        });
        if (isDefaultPrevented) {
            return;
        }
    }
    _react.default.startTransition(()=>{
        (0, _approuterinstance.dispatchNavigateAction)(as || href, replace ? 'replace' : 'push', scroll != null ? scroll : true, linkInstanceRef.current);
    });
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _segmentcache.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error("Failed prop type: The prop `" + args.key + "` expects a " + args.expected + " in `<Link>`, but got `" + args.actual + "` instead." + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto' && props[key] !== 'unstable_forceStale') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto" | "unstable_forceStale"`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const _ = key;
            }
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof hrefProp === 'string') {
                href = hrefProp;
            } else if (typeof hrefProp === 'object' && typeof hrefProp.pathname === 'string') {
                href = hrefProp.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error("Dynamic href `" + href + "` found in <Link> while using the `/app` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href"), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const { href, as } = _react.default.useMemo({
        "LinkComponent.useMemo": ()=>{
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
    }["LinkComponent.useMemo"], [
        hrefProp,
        asProp
    ]);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn('"onClick" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link');
            }
            if (onMouseEnterProp) {
                console.warn('"onMouseEnter" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link');
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error("No children were passed to <Link> with `href` of `" + hrefProp + "` but one child is required https://nextjs.org/docs/messages/link-no-children"), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error("Multiple children were passed to <Link> with `href` of `" + hrefProp + "` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children" + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ((children == null ? void 0 : children.type) === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, href, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        href,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error('Component rendered inside next/link has to pass click event to "onClick" prop.'), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user.
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchProp === null || prefetchProp === 'auto' ? _segmentcache.FetchStrategy.PPR : // (although invalid values should've been filtered out by prop validation in dev)
        _segmentcache.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map
}),
"[project]/web_1_autocinema/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/web_1_autocinema/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/web_1_autocinema/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_define_property
]);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
;
}),
]);

//# sourceMappingURL=web_1_autocinema_bead73a3._.js.map