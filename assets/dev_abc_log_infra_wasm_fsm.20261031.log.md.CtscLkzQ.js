import{_ as n,o as a,c as e,ag as p}from"./chunks/framework.DlQ8ZhpE.js";const T=JSON.parse('{"title":"fsm.20261031.log","description":"","frontmatter":{},"headers":[],"relativePath":"dev/abc/log/infra/wasm/fsm.20261031.log.md","filePath":"dev/abc/log/infra/wasm/fsm.20261031.log.md"}'),l={name:"dev/abc/log/infra/wasm/fsm.20261031.log.md"};function i(t,s,m,r,S,c){return a(),e("div",null,[...s[0]||(s[0]=[p(`<h1 id="fsm-20261031-log" tabindex="-1">fsm.20261031.log <a class="header-anchor" href="#fsm-20261031-log" aria-label="Permalink to &quot;fsm.20261031.log&quot;">​</a></h1><blockquote><p><strong>Raw Audit Log:</strong> <a href="/dev/abc/log/infra/wasm/fsm.20261031.log" target="_blank" rel="noopener"><code>/dev/abc/log/infra/wasm/fsm.20261031.log</code></a></p></blockquote><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>(self) wittgena@wittgenas-MacBook-Pro self % python -m dev.e2e.infra.wasm.fsm</span></span>
<span class="line"><span>[Reactor] macOS detected. Native CPU Affinity pinning is bypassed (OS constraint).</span></span>
<span class="line"><span>[Reactor] UVLoop (epoll) Policy injected.</span></span>
<span class="line"><span>[Reactor] Ignition... Loop: EventLoopPolicy | CPU: Core Virtual-39876</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.fsm.entry: </span></span>
<span class="line"><span>[CLI] Starting Isolated FSM WasmTester for suites: [&#39;compile&#39;, &#39;multiverse&#39;, &#39;incident&#39;]...</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.tester: </span></span>
<span class="line"><span>--- [START] Orchestrating Distributed WASM Environment (Target: fsm.wasm) ---</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.tester: [SYSTEM] Initializing TaskSupervisor and WasmTaskerDaemon...</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  xphi.node.ops.task.supervisor: [Supervisor] Mounted Daemon: TaskWasm</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [tasker-6fd279-39876] Pre-warming 5 WASM instances...</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [tasker-6fd279-39876] WASM Instance Pool initialized successfully.</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: TaskWasm listening: Stream[wasm:execute:stream:tester_isolated] | PubSub[wasm:control:req:tester_isolated] (Max Concurrency: 5, PID: 39876)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.tester: [SYSTEM] Initializing WasmBroker &amp; Scenarios...</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  wasm.tester: </span></span>
<span class="line"><span>&gt;&gt;&gt; [PHASE] Starting Test Suite: COMPILE &lt;&lt;&lt;</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  infra.wasm.fsm: </span></span>
<span class="line"><span>=======================================================</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  infra.wasm.fsm: [START] Suite: FSM Compiler, Auto-Linker &amp; Static Sandbox</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  infra.wasm.fsm: =======================================================</span></span>
<span class="line"><span></span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner: </span></span>
<span class="line"><span>[Control Plane] Shifting WasmCgroup Policy Tier -&gt; SYSTEM</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [9366fd7b] Global Cgroup default tier updated -&gt; SYSTEM</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   └─ Policy successfully enforced to SYSTEM.</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  infra.wasm.fsm: </span></span>
<span class="line"><span>--- [Compile 1] Canonical Hashing &amp; Determinism ---</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [911d665b] Entering Stateless Multi-VM Jail: fsm.wasm (Tier: SYSTEM, Target: FSM_COMPILE)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [AOT Compile] Compiling fsm.wasm (Only once per process)...</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [AOT Compile] fsm.wasm cached successfully.</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [fsm-vm-worker-4503956720] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [fsm.wasm] Routing FSM_COMPILE on &#39;compile_det_01&#39; (Fuel Limit: 1000)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [Host Commit] Committed 1 state diff(s) to master ledger (target: compile_det_01)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [911d665b] VM Sandbox Metrics: {&#39;policy_name&#39;: &#39;fsm-vm-worker-4503956720&#39;, &#39;tier&#39;: &#39;SYSTEM&#39;, &#39;mem_usage_bytes&#39;: 1179648, &#39;mem_limit_bytes&#39;: 268435456, &#39;fuel_consumed&#39;: 468804,&#39;fuel_remaining&#39;: 1999531196, &#39;gas_used&#39;: 20}</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [383d61fe] Entering Stateless Multi-VM Jail: fsm.wasm (Tier: SYSTEM, Target: FSM_COMPILE)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [fsm-vm-worker-4503239120] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [fsm.wasm] Routing FSM_COMPILE on &#39;compile_det_01&#39; (Fuel Limit: 1000)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [Host Commit] Committed 1 state diff(s) to master ledger (target: compile_det_01)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [383d61fe] VM Sandbox Metrics: {&#39;policy_name&#39;: &#39;fsm-vm-worker-4503239120&#39;, &#39;tier&#39;: &#39;SYSTEM&#39;, &#39;mem_usage_bytes&#39;: 1179648, &#39;mem_limit_bytes&#39;: 268435456, &#39;fuel_consumed&#39;: 468804,&#39;fuel_remaining&#39;: 1999531196, &#39;gas_used&#39;: 20}</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [0b4d0780] Entering Stateless Multi-VM Jail: fsm.wasm (Tier: SYSTEM, Target: FSM_COMPILE)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [fsm-vm-worker-4504021392] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [fsm.wasm] Routing FSM_COMPILE on &#39;compile_det_01&#39; (Fuel Limit: 1000)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [Host Commit] Committed 1 state diff(s) to master ledger (target: compile_det_01)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [0b4d0780] VM Sandbox Metrics: {&#39;policy_name&#39;: &#39;fsm-vm-worker-4504021392&#39;, &#39;tier&#39;: &#39;SYSTEM&#39;, &#39;mem_usage_bytes&#39;: 1179648, &#39;mem_limit_bytes&#39;: 268435456, &#39;fuel_consumed&#39;: 468804,&#39;fuel_remaining&#39;: 1999531196, &#39;gas_used&#39;: 20}</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 0.00ms | Output: 100% Deterministic Root Hash: branch:c8325fbfec1c9431</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  infra.wasm.fsm: </span></span>
<span class="line"><span>--- [Compile 2] Static Sandbox: DagJoinBarrier Deadlock Detection ---</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [94ee4301] Entering Stateless Multi-VM Jail: fsm.wasm (Tier: SYSTEM, Target: FSM_COMPILE)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [fsm-vm-worker-4504043600] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [fsm.wasm] Routing FSM_COMPILE on &#39;compile_deadlock_02&#39; (Fuel Limit: 1000)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [94ee4301] VM Sandbox Metrics: {&#39;policy_name&#39;: &#39;fsm-vm-worker-4504043600&#39;, &#39;tier&#39;: &#39;SYSTEM&#39;, &#39;mem_usage_bytes&#39;: 1179648, &#39;mem_limit_bytes&#39;: 268435456, &#39;fuel_consumed&#39;: 151722,&#39;fuel_remaining&#39;: 1999848278}</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 0.00ms | Output: Deadlock risk caught before mount: E_BARRIER_DEADLOCK_RISK: Parallel branch node &#39;Unsafe_Branch&#39; must define fallback (&#39;fb&#39;) to prevent barrier deadlo</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  infra.wasm.fsm: </span></span>
<span class="line"><span>--- [Compile 3] Auto-Linker: &gt;2KB Graph SESE Partition &amp; SYMLINK ---</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [5ffea915] Entering Stateless Multi-VM Jail: fsm.wasm (Tier: SYSTEM, Target: FSM_COMPILE)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [fsm-vm-worker-4504053936] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [fsm.wasm] Routing FSM_COMPILE on &#39;compile_oversized_03&#39; (Fuel Limit: 2000)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [Host Commit] Committed 5 state diff(s) to master ledger (target: compile_oversized_03)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [5ffea915] VM Sandbox Metrics: {&#39;policy_name&#39;: &#39;fsm-vm-worker-4504053936&#39;, &#39;tier&#39;: &#39;SYSTEM&#39;, &#39;mem_usage_bytes&#39;: 1245184, &#39;mem_limit_bytes&#39;: 268435456, &#39;fuel_consumed&#39;: 11323252, &#39;fuel_remaining&#39;: 1988676748, &#39;gas_used&#39;: 100}</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 0.00ms | Output: Oversized graph auto-partitioned into 5 bundles (Root=791B &lt;= 2048B)</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  infra.wasm.fsm: </span></span>
<span class="line"><span>--- [Compile 4] Missing Entry Point Guard ---</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [700731ca] Entering Stateless Multi-VM Jail: fsm.wasm (Tier: SYSTEM, Target: FSM_COMPILE)</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  wasm.quota: [fsm-vm-worker-4503973200] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [fsm.wasm] Routing FSM_COMPILE on &#39;bad_ep&#39; (Fuel Limit: 30000000)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [700731ca] VM Sandbox Metrics: {&#39;policy_name&#39;: &#39;fsm-vm-worker-4503973200&#39;, &#39;tier&#39;: &#39;SYSTEM&#39;, &#39;mem_usage_bytes&#39;: 1179648, &#39;mem_limit_bytes&#39;: 268435456, &#39;fuel_consumed&#39;: 94971, &#39;fuel_remaining&#39;: 1999905029}</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 0.00ms | Output: Invalid entry point rejected cleanly: E_MISSING_ENTRY: Entry point &#39;NonExistent_Node&#39; not found in graph &#39;g&#39;</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner: </span></span>
<span class="line"><span>=== [DONE] Scenarios Completed: 4 Passed, 0 Failed ===</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  wasm.tester: </span></span>
<span class="line"><span>&gt;&gt;&gt; [PHASE] Starting Test Suite: MULTIVERSE &lt;&lt;&lt;</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  infra.wasm.fsm: </span></span>
<span class="line"><span>=======================================================</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  infra.wasm.fsm: [START] Suite: Multiverse Transitions &amp; Fuel Conservation</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  infra.wasm.fsm: =======================================================</span></span>
<span class="line"><span></span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner: </span></span>
<span class="line"><span>[Control Plane] Shifting WasmCgroup Policy Tier -&gt; SYSTEM</span></span>
<span class="line"><span>SUMMARY🔥| SYSTEM | INFO  |  [G:1.0] [Acc:1.8] daemon.taskwasm: [38332df6] Global Cgroup default tier updated -&gt; SYSTEM</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   └─ Policy successfully enforced to SYSTEM.</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  infra.wasm.fsm: </span></span>
<span class="line"><span>--- [Multiverse 1] 1:3 Asymmetric Fuel Slicing ([0.4, 0.4, 0.2]) ---</span></span>
<span class="line"><span>SUMMARY🔥| SYSTEM | INFO  |  [G:0.9] [Acc:1.9] daemon.taskwasm: [708ebd14] Entering Stateless Multi-VM Jail: fsm.wasm (Tier: SYSTEM, Target: FSM_STEP)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [fsm-vm-worker-4504065968] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [fsm.wasm] Routing FSM_STEP on &#39;branch:root_test&#39; (Fuel Limit: 3000)</span></span>
<span class="line"><span>SUMMARY🔥| SYSTEM | INFO  |  [G:0.9] [Acc:2.0] daemon.taskwasm: [Host Commit] Committed 1 state diff(s) to master ledger (target: branch:root_test)</span></span>
<span class="line"><span>SUMMARY🔥| SYSTEM | INFO  |  [G:0.8] [Acc:2.2] daemon.taskwasm: [708ebd14] VM Sandbox Metrics: {&#39;policy_name&#39;: &#39;fsm-vm-worker-4504065968&#39;, &#39;tier&#39;: &#39;SYSTEM&#39;, &#39;mem_usage_bytes&#39;: 1179648, &#39;mem_limit_bytes&#39;: 268435456, &#39;fuel_consumed&#39;: 337195, &#39;fuel_remaining&#39;: 1999662805, &#39;gas_used&#39;: 30}</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 0.00ms | Output: Exact Fuel Conservation Verified: 3000 -&gt; -30 -&gt; [1188, 1188, 594]</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  infra.wasm.fsm: </span></span>
<span class="line"><span>--- [Multiverse 2] SYMLINK Subgraph Jump &amp; Call-Stack RETURN ---</span></span>
<span class="line"><span>SUMMARY🔥| SYSTEM | INFO  |  [G:0.8] [Acc:2.3] daemon.taskwasm: [bf3e9888] Entering Stateless Multi-VM Jail: fsm.wasm (Tier: SYSTEM, Target: FSM_STEP)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [fsm-vm-worker-4504067600] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [fsm.wasm] Routing FSM_STEP on &#39;branch:main_graph&#39; (Fuel Limit: 500)</span></span>
<span class="line"><span>SUMMARY🔥| SYSTEM | INFO  |  [G:0.8] [Acc:2.4] daemon.taskwasm: [Host Commit] Committed 1 state diff(s) to master ledger (target: branch:main_graph)</span></span>
<span class="line"><span>SUMMARY🔥| SYSTEM | INFO  |  [G:0.7] [Acc:2.5] daemon.taskwasm: [bf3e9888] VM Sandbox Metrics: {&#39;policy_name&#39;: &#39;fsm-vm-worker-4504067600&#39;, &#39;tier&#39;: &#39;SYSTEM&#39;, &#39;mem_usage_bytes&#39;: 1179648, &#39;mem_limit_bytes&#39;: 268435456, &#39;fuel_consumed&#39;: 209517, &#39;fuel_remaining&#39;: 1999790483, &#39;gas_used&#39;: 10}</span></span>
<span class="line"><span>SUMMARY🔥| SYSTEM | INFO  |  [G:0.7] [Acc:2.6] daemon.taskwasm: [8de85217] Entering Stateless Multi-VM Jail: fsm.wasm (Tier: SYSTEM, Target: FSM_STEP)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [fsm-vm-worker-4504129616] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [fsm.wasm] Routing FSM_STEP on &#39;branch:db_diag&#39; (Fuel Limit: 490)</span></span>
<span class="line"><span>SUMMARY🔥| SYSTEM | INFO  |  [G:0.7] [Acc:2.7] daemon.taskwasm: [Host Commit] Committed 1 state diff(s) to master ledger (target: branch:db_diag)</span></span>
<span class="line"><span>SUMMARY🔥| SYSTEM | INFO  |  [G:0.7] [Acc:2.8] daemon.taskwasm: [8de85217] VM Sandbox Metrics: {&#39;policy_name&#39;: &#39;fsm-vm-worker-4504129616&#39;, &#39;tier&#39;: &#39;SYSTEM&#39;, &#39;mem_usage_bytes&#39;: 1179648, &#39;mem_limit_bytes&#39;: 268435456, &#39;fuel_consumed&#39;: 205560, &#39;fuel_remaining&#39;: 1999794440, &#39;gas_used&#39;: 15}</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 0.00ms | Output: SYMLINK Call -&gt; RETURN restored parent frame &#39;branch:main_graph#Resume_After_Subgraph&#39;</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  infra.wasm.fsm: </span></span>
<span class="line"><span>--- [Multiverse 3] HTTP 202 Pre-Flight Zero-Spend Parking ---</span></span>
<span class="line"><span>SUMMARY🔥| SYSTEM | INFO  |  [G:0.6] [Acc:3.0] daemon.taskwasm: [cf20b492] Entering Stateless Multi-VM Jail: fsm.wasm (Tier: SYSTEM, Target: FSM_STEP)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [fsm-vm-worker-4504131664] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [fsm.wasm] Routing FSM_STEP on &#39;branch:root_test&#39; (Fuel Limit: 1118)</span></span>
<span class="line"><span>[Telemetry] Burst Alert Triggered on &#39;SYSTEM:daemon.taskwasm&#39; (Acc: 3.07) Den: 16.00)</span></span>
<span class="line"><span>SUMMARY🔥| SYSTEM | INFO  |  [G:0.1] [Acc:3.1] daemon.taskwasm: [Host Commit] Committed 1 state diff(s) to master ledger (target: branch:root_test)</span></span>
<span class="line"><span>[Telemetry] System Stabilized on &#39;TEST_EXECUTION:base.scene.runner&#39;</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 0.00ms | Output: Zero-Spend HITL Parking verified (gas_used=0, Preserved Fuel=1118)</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  infra.wasm.fsm: </span></span>
<span class="line"><span>--- [Multiverse 4] StreamBreaker Exhaustion Guard ---</span></span>
<span class="line"><span>[Telemetry] Burst Alert Triggered on &#39;SYSTEM:daemon.taskwasm&#39; (Acc: 3.30) Den: 17.00)</span></span>
<span class="line"><span>[Telemetry] System Stabilized on &#39;SYSTEM:wasm.quota&#39;</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [fsm-vm-worker-4504177792] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [fsm.wasm] Routing FSM_STEP on &#39;branch:root_test&#39; (Fuel Limit: 10)</span></span>
<span class="line"><span>[Telemetry] Burst Alert Triggered on &#39;SYSTEM:daemon.taskwasm&#39; (Acc: 3.41) Den: 17.50)</span></span>
<span class="line"><span>[Telemetry] System Stabilized on &#39;TEST_EXECUTION:base.scene.runner&#39;</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 0.00ms | Output: Runaway branch cleanly cut off by StreamBreaker: FuelExhausted</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner: </span></span>
<span class="line"><span>=== [DONE] Scenarios Completed: 4 Passed, 0 Failed ===</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  wasm.tester: </span></span>
<span class="line"><span>&gt;&gt;&gt; [PHASE] Starting Test Suite: INCIDENT &lt;&lt;&lt;</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  infra.wasm.fsm: </span></span>
<span class="line"><span>=======================================================</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  infra.wasm.fsm: [START] Suite: Life cycle Ex - 03:00 AM Payment Outage</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  infra.wasm.fsm: =======================================================</span></span>
<span class="line"><span></span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner: </span></span>
<span class="line"><span>[Control Plane] Shifting WasmCgroup Policy Tier -&gt; SYSTEM</span></span>
<span class="line"><span>[Telemetry] Burst Alert Triggered on &#39;SYSTEM:daemon.taskwasm&#39; (Acc: 3.52) Den: 18.00)</span></span>
<span class="line"><span>[Telemetry] System Stabilized on &#39;TEST_EXECUTION:base.scene.runner&#39;</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   └─ Policy successfully enforced to SYSTEM.</span></span>
<span class="line"><span>[Telemetry] Burst Alert Triggered on &#39;SYSTEM:daemon.taskwasm&#39; (Acc: 3.64) Den: 18.50)</span></span>
<span class="line"><span>[Telemetry] System Stabilized on &#39;SYSTEM:wasm.quota&#39;</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [fsm-vm-worker-4504182592] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [fsm.wasm] Routing FSM_COMPILE on &#39;incident_03am&#39; (Fuel Limit: 3000)</span></span>
<span class="line"><span>[Telemetry] Burst Alert Triggered on &#39;SYSTEM:daemon.taskwasm&#39; (Acc: 3.75) Den: 19.00)</span></span>
<span class="line"><span>[Telemetry] System Stabilized on &#39;SYSTEM:wasm.quota&#39;</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [fsm-vm-worker-4504032592] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [fsm.wasm] Routing FSM_STEP on &#39;branch:c8325fbfec1c9431&#39; (Fuel Limit: 3000)</span></span>
<span class="line"><span>[Telemetry] Burst Alert Triggered on &#39;SYSTEM:daemon.taskwasm&#39; (Acc: 4.09) Den: 20.50)</span></span>
<span class="line"><span>[Telemetry] System Stabilized on &#39;SYSTEM:wasm.quota&#39;</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [fsm-vm-worker-4504034160] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [fsm.wasm] Routing FSM_STEP on &#39;branch:c8325fbfec1c9431&#39; (Fuel Limit: 0)</span></span>
<span class="line"><span>[Telemetry] Burst Alert Triggered on &#39;SYSTEM:daemon.taskwasm&#39; (Acc: 4.43) Den: 22.00)</span></span>
<span class="line"><span>[Telemetry] System Stabilized on &#39;TEST_EXECUTION:base.scene.runner&#39;</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 0.00ms | Output: Barrier Collapsed: Winner=&#39;deploy_regression&#39; (_score=0.95), Reclaimed Fuel=2211</span></span>
<span class="line"><span>[Telemetry] Burst Alert Triggered on &#39;SYSTEM:daemon.taskwasm&#39; (Acc: 4.66) Den: 23.00)</span></span>
<span class="line"><span>[Telemetry] System Stabilized on &#39;SYSTEM:wasm.quota&#39;</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [fsm-vm-worker-4503826912] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [fsm.wasm] Routing FSM_STEP on &#39;branch:c8325fbfec1c9431&#39; (Fuel Limit: 2211)</span></span>
<span class="line"><span>[Telemetry] Burst Alert Triggered on &#39;SYSTEM:daemon.taskwasm&#39; (Acc: 4.77) Den: 23.50)</span></span>
<span class="line"><span>[Telemetry] System Stabilized on &#39;TEST_EXECUTION:base.scene.runner&#39;</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 0.00ms | Output: Router evaluated &#39;$._score&gt;=0.9&#39; -&gt; Routed to &#39;Postmortem_Act&#39; (Fuel=2201)</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner: </span></span>
<span class="line"><span>=== [DONE] Scenarios Completed: 2 Passed, 0 Failed ===</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  wasm.tester: </span></span>
<span class="line"><span>[SYSTEM] Generating Canonical Proof via Phase Kernel (phase.wasm)...</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.wasm: [AOT Compile] Compiling phase.wasm (Only once per process)...</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.wasm: [AOT Compile] phase.wasm cached successfully.</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [worker-4503946640] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  wasm.tester: [AnchorStore] Test Execution Proof successfully sealed! Hash: ae562af00f6967dd2eee3da04bce3a7caeec4907eeb2962051185b287529be71</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.tester: [SYSTEM] Tearing down Sandbox (Shutting down Supervisor)...</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  xphi.node.ops.task.supervisor: [Supervisor] Gracefully stopping 1 daemons concurrently...</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  infra.wasm.fsm: </span></span>
<span class="line"><span>===========================================================================</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  infra.wasm.fsm:                      FSM WASM PIPELINE EXECUTION REPORT                    </span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  infra.wasm.fsm: ===========================================================================</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.fsm.entry: [SUCCESS] All FSM Test Suites (compile, multiverse, incident) PASSED.</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.fsm.entry: 🔗 Execution Canonical Hash: ae562af00f6967dd2eee3da04bce3a7caeec4907eeb2962051185b287529be71</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  infra.wasm.fsm: ===========================================================================</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Reactor] Lifecycle terminated cleanly.</span></span>
<span class="line"><span>SUMMARY🔥| SYSTEM | INFO  |  [G:0.1] [Acc:4.9] daemon.taskwasm: [daemon.taskwasm] Bursting logs suppressed... (x17)</span></span></code></pre></div>`,3)])])}const E=n(l,[["render",i]]);export{T as __pageData,E as default};
