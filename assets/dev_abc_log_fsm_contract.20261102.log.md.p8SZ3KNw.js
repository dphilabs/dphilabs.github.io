import{_ as s,o as n,c as e,ag as p}from"./chunks/framework.DlQ8ZhpE.js";const S=JSON.parse('{"title":"contract.20261102.log","description":"","frontmatter":{},"headers":[],"relativePath":"dev/abc/log/fsm/contract.20261102.log.md","filePath":"dev/abc/log/fsm/contract.20261102.log.md"}'),l={name:"dev/abc/log/fsm/contract.20261102.log.md"};function t(i,a,c,r,o,d){return n(),e("div",null,[...a[0]||(a[0]=[p(`<h1 id="contract-20261102-log" tabindex="-1">contract.20261102.log <a class="header-anchor" href="#contract-20261102-log" aria-label="Permalink to &quot;contract.20261102.log&quot;">​</a></h1><blockquote><p><strong>Raw Audit Log:</strong> <a href="/dev/abc/log/fsm/contract.20261102.log" target="_blank" rel="noopener"><code>/dev/abc/log/fsm/contract.20261102.log</code></a></p></blockquote><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>(self) wittgena@wittgenas-MacBook-Pro self % python -m dev.e2e.fsm.contract             </span></span>
<span class="line"><span>======================================================================================</span></span>
<span class="line"><span> [FIBER FSM UNIT &amp; POLYGLOT BRIDGE E2E SUITE] Starting Granular Verification</span></span>
<span class="line"><span>======================================================================================</span></span>
<span class="line"><span></span></span>
<span class="line"><span>--------------------------------------------------------------------------------------</span></span>
<span class="line"><span> [Suite 1: Contract &amp; Projection] URI Classification, \`.$\` Binding &amp; CAS Slicing</span></span>
<span class="line"><span>--------------------------------------------------------------------------------------</span></span>
<span class="line"><span>  • URI Matrix       : Verified 10 schemes (cerebras/qwen-3.8-27b, gemini/gemini-3.1-flash-lite, llama_server/gemma-3-1b-it-Q4_K_M.gguf, MCP, fn://, py://, https://, exec://)</span></span>
<span class="line"><span>  • Dynamic \`.$\`     : Resolved nested dict/list JSONPaths -&gt; {&#39;static_mode&#39;: &#39;strict&#39;, &#39;org_id&#39;: &#39;acme_finops&#39;, &#39;second_sku&#39;: &#39;B-200&#39;, &#39;threshold&#39;: 0.88, &#39;missing_fallback&#39;: &#39;$.non_existent_key&#39;}</span></span>
<span class="line"><span>  • Projection Slice : Lifted meta={&#39;_hitl_yield&#39;: False, &#39;$.metrics._score&#39;: 0.97, &#39;_score&#39;: 0.97, &#39;$.metrics.risk_level&#39;: &#39;low&#39;, &#39;risk_level&#39;: &#39;low&#39;} | Offloaded keys=[&#39;records&#39;, &#39;cursor&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>--------------------------------------------------------------------------------------</span></span>
<span class="line"><span> [Suite 2: Low-Level Runtime PTA] Direct 0:1 Spawn, 1:1 Step, Asymmetric 1:3 Fork &amp; 3:1 Merge</span></span>
<span class="line"><span>--------------------------------------------------------------------------------------</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: ⚙️ [AOT Compile] Compiling fsm.wasm (Only once per process)...</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: ✅ [AOT Compile] fsm.wasm cached successfully.</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [fsm-vm-worker-4503380928] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [fsm.wasm] Routing FSM_COMPILE on &#39;unit_runtime_02&#39; (Fuel Limit: 2000)</span></span>
<span class="line"><span> LOG | KERNEL | INFO  |  anchor.store: [AnchorStore] Lock held by another node. Operating as PROPOSER (Read-Only/Proposer).</span></span>
<span class="line"><span> LOG | ANCHOR | INFO  |  anchor.oracle: [AnchorOracle] Mounted Anchor DB via AnchorStore. Canonical WASM Broker attached.</span></span>
<span class="line"><span> LOG | KERNEL | INFO  |  adapter.pta: [Crypto] Node identity loaded. PubKey: b77bda9b...</span></span>
<span class="line"><span> LOG | KERNEL | INFO  |  adapter.pta: [PtaAdapter:6C2F90] Tx Sealed. Receipt: 5a0f15bd... | Hash: 2eadbd64</span></span>
<span class="line"><span>  • [0:1 GENESIS]    : Spawned &#39;unit_pta&#39; at &#39;Entry_Node&#39; (model=&#39;cerebras/qwen-3.8-27b&#39;) | PTA=2eadbd64..:0 | Fuel=1000</span></span>
<span class="line"><span> LOG | KERNEL | INFO  |  adapter.pta: [PtaAdapter:6C2F90] Tx Sealed. Receipt: dac806ac... | Hash: 9a4643de</span></span>
<span class="line"><span>  • [1:3 FORK]       : Asymmetric slice 900 Fuel -&gt; [450, 270, 180] | Verified CAS \`_last_ptr\`=blob:b01487dbc42bf78e ({&#39;heavy_parent_artifact&#39;: [1, 2, 3, 4]})</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [fsm-vm-worker-4503692752] enforced: Tier=STANDARD, Mem=64MB, Fuel=10,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [fsm.wasm] Routing FSM_STEP on &#39;branch:b6541c2acccd87bf&#39; (Fuel Limit: 450)</span></span>
<span class="line"><span> LOG | KERNEL | INFO  |  adapter.pta: [PtaAdapter:6C2F90] Tx Sealed. Receipt: 14f2d2ec... | Hash: 83177597</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [fsm-vm-worker-4503695952] enforced: Tier=STANDARD, Mem=64MB, Fuel=10,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [fsm.wasm] Routing FSM_STEP on &#39;branch:b6541c2acccd87bf&#39; (Fuel Limit: 270)</span></span>
<span class="line"><span> LOG | KERNEL | INFO  |  adapter.pta: [PtaAdapter:6C2F90] Tx Sealed. Receipt: f7657142... | Hash: ad974176</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [fsm-vm-worker-4503757504] enforced: Tier=STANDARD, Mem=64MB, Fuel=10,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [fsm.wasm] Routing FSM_STEP on &#39;branch:b6541c2acccd87bf&#39; (Fuel Limit: 180)</span></span>
<span class="line"><span> LOG | KERNEL | INFO  |  adapter.pta: [PtaAdapter:6C2F90] Tx Sealed. Receipt: 099ee9cf... | Hash: 01eaca0a</span></span>
<span class="line"><span>  • [1:1 STEP x3]    : Transitioned all 3 branches to &#39;Barrier_Join&#39; | Remaining Fuels=[440, 250, 150] (Rehydration Verified)</span></span>
<span class="line"><span> LOG | KERNEL | INFO  |  adapter.pta: [PtaAdapter:6C2F90] Tx Sealed. Receipt: e193c666... | Hash: 643a4226</span></span>
<span class="line"><span>  • [3:1 MERGE]      : Collapsed 3 PTAs -&gt; Winner=&#39;gamma&#39; | Reclaimed Fuel=840 | Final PTA=643a4226..:0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>--------------------------------------------------------------------------------------</span></span>
<span class="line"><span> [Suite 3: Bridge Protocol Matrix] Direct Dispatch for llm://, reflect://, fn://, py://, https://, mcp://, exec://</span></span>
<span class="line"><span>--------------------------------------------------------------------------------------</span></span>
<span class="line"><span> LOG | ANCHOR | INFO  |  anchor.oracle: [AnchorOracle] Mounted Anchor DB via AnchorStore. Canonical WASM Broker attached.</span></span>
<span class="line"><span>  • [llm/reflect://] : Verified \`cerebras/qwen-3.8-27b\` (JSON unpack) &amp; \`gemini/gemini-3.1-flash-lite\` (stream assembly)</span></span>
<span class="line"><span>  • [fn://]          : Verified 1-arg sync, **kwargs sync, and 3-arg async callable signatures</span></span>
<span class="line"><span>  • [py://]          : Verified dynamic module import (\`py://os.path:basename\` -&gt; &#39;fiber.log&#39;)</span></span>
<span class="line"><span>  • [mcp://]         : Verified canonical MCP Gateway delegation (Cost=7, Score=0.85)</span></span>
<span class="line"><span> LOG | POLYGLOT_BRIDGE | INFO  |  fsm.bridge.polyglot: [PolyglotBridge:bridge_test] Pre-Flight HITL Yield triggered at &#39;Test_Node&#39;.</span></span>
<span class="line"><span>  • [https:// (202)] : Verified Direct REST Pre-Flight HITL Park (Ticket=&#39;tkt_http_202&#39;, Cost=0)</span></span>
<span class="line"><span>  • [https:// (200)] : Verified Direct REST Settlement after approval (Amount=50000, Cost=12)</span></span>
<span class="line"><span>  • [exec:// (0)]    : Verified async stdio subprocess pipe (Output=&#39;hello_stdio&#39;, Cost=9)</span></span>
<span class="line"><span> LOG | POLYGLOT_BRIDGE | INFO  |  fsm.bridge.polyglot: [PolyglotBridge:bridge_test] Pre-Flight HITL Yield triggered at &#39;Test_Node&#39;.</span></span>
<span class="line"><span>  • [exec:// (202)]  : Verified CLI Exit Code 202 zero-spend HITL parking (Ticket=&#39;cli_tkt_77&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>--------------------------------------------------------------------------------------</span></span>
<span class="line"><span> [Suite 4: Hybrid Polyglot DAG] llm://cerebras/qwen-3.8-27b -&gt; (https:// [202 Park] || exec://) -&gt; reflect://llama_server/gemma-3-1b-it-Q4_K_M.gguf</span></span>
<span class="line"><span>--------------------------------------------------------------------------------------</span></span>
<span class="line"><span> LOG | ANCHOR | INFO  |  anchor.oracle: [AnchorOracle] Mounted Anchor DB via AnchorStore. Canonical WASM Broker attached.</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [fsm-vm-worker-4509679120] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [fsm.wasm] Routing FSM_COMPILE on &#39;poly_dag_01&#39; (Fuel Limit: 2000)</span></span>
<span class="line"><span> LOG | KERNEL | INFO  |  adapter.pta: [PtaAdapter:C81590] Tx Sealed. Receipt: 31313b2a... | Hash: 1a7a17bc</span></span>
<span class="line"><span> LOG | KERNEL | INFO  |  adapter.pta: [PtaAdapter:C81590] Tx Sealed. Receipt: 7f745679... | Hash: b82dd242</span></span>
<span class="line"><span> LOG | POLYGLOT_BRIDGE | INFO  |  fsm.bridge.polyglot: [PolyglotBridge:poly_dag_01/b0] Pre-Flight HITL Yield triggered at &#39;Legacy_REST_Branch&#39;.</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [fsm-vm-worker-4509377040] enforced: Tier=STANDARD, Mem=64MB, Fuel=10,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [fsm.wasm] Routing FSM_STEP on &#39;branch:75405a056cc59ca7&#39; (Fuel Limit: 495)</span></span>
<span class="line"><span> LOG | KERNEL | INFO  |  adapter.pta: [PtaAdapter:C81590] Tx Sealed. Receipt: 3694b992... | Hash: f606f5a7</span></span>
<span class="line"><span>  • [Phase A: Parked]: llm://cerebras(-10) -&gt; Fork[495, 495] | b0(https://) Parked at 495 Fuel | b1(exec://) Waiting at Barrier with 487 Fuel</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [fsm-vm-worker-4509146368] enforced: Tier=STANDARD, Mem=64MB, Fuel=10,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [fsm.wasm] Routing FSM_STEP on &#39;branch:75405a056cc59ca7&#39; (Fuel Limit: 495)</span></span>
<span class="line"><span> LOG | KERNEL | INFO  |  adapter.pta: [PtaAdapter:C81590] Tx Sealed. Receipt: 24c7418e... | Hash: 5fe1773f</span></span>
<span class="line"><span> LOG | KERNEL | INFO  |  adapter.pta: [PtaAdapter:C81590] Tx Sealed. Receipt: 3d201f10... | Hash: d566bae8</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [fsm-vm-worker-4509146368] enforced: Tier=STANDARD, Mem=64MB, Fuel=10,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [fsm.wasm] Routing FSM_STEP on &#39;branch:75405a056cc59ca7&#39; (Fuel Limit: 967)</span></span>
<span class="line"><span> LOG | KERNEL | INFO  |  adapter.pta: [PtaAdapter:C81590] Tx Sealed. Receipt: a9d24f43... | Hash: 3e9b800a</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [fsm-vm-worker-4509598544] enforced: Tier=STANDARD, Mem=64MB, Fuel=10,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [fsm.wasm] Routing FSM_STEP on &#39;branch:75405a056cc59ca7&#39; (Fuel Limit: 967)</span></span>
<span class="line"><span> LOG | KERNEL | INFO  |  adapter.pta: [PtaAdapter:C81590] Tx Sealed. Receipt: 89206692... | Hash: 11707fc8</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [fsm-vm-worker-4509598544] enforced: Tier=STANDARD, Mem=64MB, Fuel=10,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [fsm.wasm] Routing FSM_STEP on &#39;branch:75405a056cc59ca7&#39; (Fuel Limit: 959)</span></span>
<span class="line"><span> LOG | KERNEL | INFO  |  adapter.pta: [PtaAdapter:C81590] Tx Sealed. Receipt: dc4c5732... | Hash: 1649c106</span></span>
<span class="line"><span>  • [Phase B: Merged]: Approved HTTP 202 -&gt; Merge(967) -&gt; reflect://llama_server/gemma-3-1b-it-Q4_K_M.gguf(-8 -&gt; 959 Fuel) | GGUF Audit=&#39;passed&#39; | Final Node=END</span></span>
<span class="line"><span></span></span>
<span class="line"><span>======================================================================================</span></span>
<span class="line"><span> ✅ ALL CONTRACT, RUNTIME PTA, AND POLYGLOT BRIDGE E2E ASSERTIONS PASSED</span></span>
<span class="line"><span>======================================================================================</span></span></code></pre></div>`,3)])])}const O=s(l,[["render",t]]);export{S as __pageData,O as default};
