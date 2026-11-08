import{_ as n,o as s,c as e,ag as p}from"./chunks/framework.DlQ8ZhpE.js";const g=JSON.parse('{"title":"gateway.20261104.log","description":"","frontmatter":{},"headers":[],"relativePath":"dev/abc/log/infra/wasm/gateway.20261104.log.md","filePath":"dev/abc/log/infra/wasm/gateway.20261104.log.md"}'),t={name:"dev/abc/log/infra/wasm/gateway.20261104.log.md"};function l(i,a,c,r,o,S){return s(),e("div",null,[...a[0]||(a[0]=[p(`<h1 id="gateway-20261104-log" tabindex="-1">gateway.20261104.log <a class="header-anchor" href="#gateway-20261104-log" aria-label="Permalink to &quot;gateway.20261104.log&quot;">​</a></h1><blockquote><p><strong>Raw Audit Log:</strong> <a href="/dev/abc/log/infra/wasm/gateway.20261104.log" target="_blank" rel="noopener"><code>/dev/abc/log/infra/wasm/gateway.20261104.log</code></a></p></blockquote><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>(self) wittgena@wittgenas-MacBook-Pro self % python -m dev.e2e.infra.wasm.gateway</span></span>
<span class="line"><span>[Reactor] macOS detected. Native CPU Affinity pinning is bypassed (OS constraint).</span></span>
<span class="line"><span>[Reactor] UVLoop (epoll) Policy injected.</span></span>
<span class="line"><span>[Reactor] Ignition... Loop: EventLoopPolicy | CPU: Core Virtual-38201</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  infra.wasm.gateway: [PRE-FLIGHT] Build skipped. Reusing existing &#39;gateway.wasm&#39;. (Use --build to recompile)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  infra.wasm.gateway: </span></span>
<span class="line"><span>==========================================================================================</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  infra.wasm.gateway: [MASTER SUITE] Commencing Decoupled WasmGateway Integration Tests</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  infra.wasm.gateway: ==========================================================================================</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  e2e.wasm.gateway.compute: </span></span>
<span class="line"><span>--------------------------------------------------------------------------------</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  e2e.wasm.gateway.compute: [GATEWAY SETUP] Initializing Zero-WASI WasmGateway (L0 Firewall)...</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  e2e.wasm.gateway.compute: Gateway Initialized (Pre-allocated Buffer: 1MB &amp; Thread-Safe Locked)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  e2e.wasm.gateway.compute: --------------------------------------------------------------------------------</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  e2e.wasm.gateway.compute: </span></span>
<span class="line"><span>[CLI] Initiating L0 Zero-Trust Isolation Tests...</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  e2e.wasm.gateway.compute: </span></span>
<span class="line"><span>[FIREWALL DOMAIN] Scenario: OpCode, Budget, Target, Hex Payload</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.gateway: [WASM Gateway] Invoking module &#39;intent_parser&#39; (0.17 KB)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.gateway: [WASM Gateway] Execution successful: &#39;intent_parser&#39; (0.49 ms)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  e2e.wasm.gateway.compute: Passed L0 Firewall! Extracted AST: {&#39;op_code&#39;: &#39;CALL&#39;, &#39;amount&#39;: 15.5, &#39;ticker&#39;: &#39;USDC&#39;, &#39;target&#39;: &#39;urn:xphi:agent:db_router_01&#39;, &#39;raw_data&#39;: &#39;0xDEADBEEF&#39;}</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  e2e.wasm.gateway.compute: </span></span>
<span class="line"><span>[FIREWALL DOMAIN] Scenario: O(1) BDD Logic Matrix Rejection</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.gateway: [WASM Gateway] Invoking module &#39;intent_parser&#39; (0.17 KB)</span></span>
<span class="line"><span> LOG | SYSTEM | WARN  |  wasm.gateway: [WASM Gateway] Execution reverted: &#39;intent_parser&#39; (Reason: State vector rejected by logic matrix.)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  e2e.wasm.gateway.compute: Defense mechanism triggered (Revert: State vector rejected by logic matrix.)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  e2e.wasm.gateway.compute: </span></span>
<span class="line"><span>[FIREWALL DOMAIN] Scenario: Pest Sandbox Defense (SQL Injection Rejection)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.gateway: [WASM Gateway] Invoking module &#39;intent_parser&#39; (0.16 KB)</span></span>
<span class="line"><span> LOG | SYSTEM | WARN  |  wasm.gateway: [WASM Gateway] Execution reverted: &#39;intent_parser&#39; (Reason: Syntax error:  --&gt; 1:38</span></span>
<span class="line"><span>  |</span></span>
<span class="line"><span>1 | CALL FEE 100 USDC TO DB_SERVICE WITH DROP TABLE users;</span></span>
<span class="line"><span>  |                                      ^---</span></span>
<span class="line"><span>  |</span></span>
<span class="line"><span>  = expected raw_data)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  e2e.wasm.gateway.compute: Defense mechanism triggered (Revert: Syntax error:  --&gt; 1:38</span></span>
<span class="line"><span>  |</span></span>
<span class="line"><span>1 | CALL FEE 100 USDC TO DB_SERVICE WITH DROP TABLE users;</span></span>
<span class="line"><span>  |                                      ^---</span></span>
<span class="line"><span>  |</span></span>
<span class="line"><span>  = expected raw_data)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  e2e.wasm.gateway.compute: </span></span>
<span class="line"><span>[FIREWALL DOMAIN] Scenario: AST Pest Parser Rejection (LLM Hallucination)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.gateway: [WASM Gateway] Invoking module &#39;intent_parser&#39; (0.14 KB)</span></span>
<span class="line"><span> LOG | SYSTEM | WARN  |  wasm.gateway: [WASM Gateway] Execution reverted: &#39;intent_parser&#39; (Reason: Syntax error:  --&gt; 1:1</span></span>
<span class="line"><span>  |</span></span>
<span class="line"><span>1 | PLEASE CALL FEE 10 USDC TO STORAGE_NODE</span></span>
<span class="line"><span>  | ^---</span></span>
<span class="line"><span>  |</span></span>
<span class="line"><span>  = expected op_code)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  e2e.wasm.gateway.compute: Defense mechanism triggered (Revert: Syntax error:  --&gt; 1:1</span></span>
<span class="line"><span>  |</span></span>
<span class="line"><span>1 | PLEASE CALL FEE 10 USDC TO STORAGE_NODE</span></span>
<span class="line"><span>  | ^---</span></span>
<span class="line"><span>  |</span></span>
<span class="line"><span>  = expected op_code)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  e2e.wasm.gateway.compute: </span></span>
<span class="line"><span>[FIREWALL DOMAIN] Scenario: Physical Circuit Breaker (Overflow 1MB)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.gateway: [WASM Gateway] Invoking module &#39;intent_parser&#39; (1024.16 KB)</span></span>
<span class="line"><span> LOG | SYSTEM | WARN  |  wasm.gateway: [Circuit Breaker Triggered] Payload exceeds boundary (1048576B).</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  e2e.wasm.gateway.compute: Defense mechanism triggered (Revert: Memory Boundary Exceeded)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  e2e.wasm.gateway.fsm: </span></span>
<span class="line"><span>[Gateway] Initiating FSM Determinism &amp; State Transition Tests...</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  e2e.wasm.gateway.fsm: </span></span>
<span class="line"><span>⚙ [FSM DOMAIN] Scenario: Transaction FSM: Init -&gt; ExecuteVmCmd</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.gateway: [WASM Gateway] Invoking module &#39;transaction_fsm&#39; (0.34 KB)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.gateway: [WASM Gateway] Execution successful: &#39;transaction_fsm&#39; (0.15 ms)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  e2e.wasm.gateway.fsm: [PASS] FSM Transitioned successfully! Next State: {&#39;state&#39;: &#39;ShadowExecution&#39;, &#39;max_fuel_limit&#39;: 200000, &#39;caller&#39;: &#39;urn:xphi:tenant:auth_77a9&#39;, &#39;target_resource&#39;: &#39;urn:xphi:agent:db_router_01&#39;, &#39;charge_amount&#39;: 100}, Command: ExecuteVmCmd</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  e2e.wasm.gateway.fsm: </span></span>
<span class="line"><span>⚙ [FSM DOMAIN] Scenario: Epoch Topology: ZERO -&gt; ANCHOR (Resource Lock)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.gateway: [WASM Gateway] Invoking module &#39;flow_transition_fsm&#39; (0.23 KB)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.gateway: [WASM Gateway] Execution successful: &#39;flow_transition_fsm&#39; (0.17 ms)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  e2e.wasm.gateway.fsm: [PASS] FSM Transitioned successfully! Next State: {&#39;origin&#39;: &#39;0&#39;, &#39;edge&#39;: &#39;ANCHOR&#39;, &#39;reflective&#39;: True, &#39;reversible&#39;: True, &#39;anchored_target&#39;: &#39;urn:surgent:resource:resolved_task_999&#39;}, Command: ResolveAnchorCmd</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  e2e.wasm.gateway.fsm: </span></span>
<span class="line"><span>⚙ [FSM DOMAIN] Scenario: Epoch Topology: Forced Collapse -&gt; FractureCmd</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.gateway: [WASM Gateway] Invoking module &#39;flow_transition_fsm&#39; (0.22 KB)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.gateway: [WASM Gateway] Execution successful: &#39;flow_transition_fsm&#39; (0.13 ms)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  e2e.wasm.gateway.fsm: [PASS] FSM Transitioned successfully! Next State: {&#39;origin&#39;: &#39;0&#39;, &#39;edge&#39;: &#39;COLLAPSED&#39;, &#39;reflective&#39;: True, &#39;reversible&#39;: True, &#39;anchored_target&#39;: None}, Command: FractureCmd</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  e2e.wasm.gateway.fsm: </span></span>
<span class="line"><span>⚙ [FSM DOMAIN] Scenario: Clearing FSM: Rejecting unauthorized/invalid event</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.gateway: [WASM Gateway] Invoking module &#39;clearing_fsm&#39; (0.22 KB)</span></span>
<span class="line"><span> LOG | SYSTEM | WARN  |  wasm.gateway: [WASM Gateway] Execution reverted: &#39;clearing_fsm&#39; (Reason: Gateway Router Parse Error: unknown variant \`InvalidHackingEvent\`, expected one of \`FsmStartIntent\`, \`PtaAnchoredEvent\`, \`WasmExecutedEvent\`)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  e2e.wasm.gateway.fsm: [REJECT] FSM properly rejected transition (Revert: Gateway Router Parse Error: unknown variant \`InvalidHackingEvent\`, expected one of \`FsmStartIntent\`, \`PtaAnchoredEvent\`, \`WasmExecutedEvent\`)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  infra.wasm.gateway: </span></span>
<span class="line"><span>==========================================================================================</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  infra.wasm.gateway: [WASM GATEWAY E2E REPORT: PEST ISOLATION &amp; FSM DETERMINISM]</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  infra.wasm.gateway: ==========================================================================================</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  infra.wasm.gateway: [O] 01. [WASM_GATEWAY]  OpCode, Budget, Target, Hex Payload                          | Result: PASSED</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  infra.wasm.gateway: [O] 02. [WASM_GATEWAY]  O(1) BDD Logic Matrix Rejection                              | Result: PASSED</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  infra.wasm.gateway: [O] 03. [WASM_GATEWAY]  Pest Sandbox Defense (SQL Injection Rejection)               | Result: PASSED</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  infra.wasm.gateway: [O] 04. [WASM_GATEWAY]  AST Pest Parser Rejection (LLM Hallucination)                | Result: PASSED</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  infra.wasm.gateway: [O] 05. [WASM_GATEWAY]  Physical Circuit Breaker (Overflow 1MB)                      | Result: PASSED</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  infra.wasm.gateway: [O] 06. [FSM]           Transaction FSM: Init -&gt; ExecuteVmCmd                        | Result: PASSED</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  infra.wasm.gateway: [O] 07. [FSM]           Epoch Topology: ZERO -&gt; ANCHOR (Resource Lock)               | Result: PASSED</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  infra.wasm.gateway: [O] 08. [FSM]           Epoch Topology: Forced Collapse -&gt; FractureCmd               | Result: PASSED</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  infra.wasm.gateway: [O] 09. [FSM]           Clearing FSM: Rejecting unauthorized/invalid event           | Result: PASSED</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  infra.wasm.gateway: ------------------------------------------------------------------------------------------</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  infra.wasm.gateway: ALL L0 GATEWAY SCENARIOS EXECUTED SUCCESSFULLY.</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  infra.wasm.gateway: ==========================================================================================</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Reactor] Lifecycle terminated cleanly.</span></span></code></pre></div>`,3)])])}const m=n(t,[["render",l]]);export{g as __pageData,m as default};
