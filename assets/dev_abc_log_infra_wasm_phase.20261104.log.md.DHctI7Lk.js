import{_ as s,o as a,c as e,ag as t}from"./chunks/framework.DlQ8ZhpE.js";const S=JSON.parse('{"title":"phase.20261104.log","description":"","frontmatter":{},"headers":[],"relativePath":"dev/abc/log/infra/wasm/phase.20261104.log.md","filePath":"dev/abc/log/infra/wasm/phase.20261104.log.md"}'),p={name:"dev/abc/log/infra/wasm/phase.20261104.log.md"};function o(i,n,u,c,l,r){return a(),e("div",null,[...n[0]||(n[0]=[t(`<h1 id="phase-20261104-log" tabindex="-1">phase.20261104.log <a class="header-anchor" href="#phase-20261104-log" aria-label="Permalink to &quot;phase.20261104.log&quot;">​</a></h1><blockquote><p><strong>Raw Audit Log:</strong> <a href="/dev/abc/log/infra/wasm/phase.20261104.log" target="_blank" rel="noopener"><code>/dev/abc/log/infra/wasm/phase.20261104.log</code></a></p></blockquote><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>(self) wittgena@wittgenas-MacBook-Pro self % python -m dev.e2e.infra.wasm.phase</span></span>
<span class="line"><span>[Reactor] macOS detected. Native CPU Affinity pinning is bypassed (OS constraint).</span></span>
<span class="line"><span>[Reactor] UVLoop (epoll) Policy injected.</span></span>
<span class="line"><span>[Reactor] Ignition... Loop: EventLoopPolicy | CPU: Core Virtual-37756</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.entry: </span></span>
<span class="line"><span>[CLI] Starting Isolated WasmTester for suites: [&#39;sandbox&#39;, &#39;anchor&#39;, &#39;cert&#39;, &#39;dynamics&#39;]...</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.tester: </span></span>
<span class="line"><span>--- [START] Orchestrating Distributed WASM Environment (Target: phase.wasm) ---</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.tester: [SYSTEM] Initializing TaskSupervisor and WasmTaskerDaemon...</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  xphi.node.ops.task.supervisor: [Supervisor] Mounted Daemon: TaskWasm</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [tasker-f7dd9c-37756] Pre-warming 5 WASM instances...</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [tasker-f7dd9c-37756] WASM Instance Pool initialized successfully.</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: TaskWasm listening: Stream[wasm:execute:stream:tester_isolated] | PubSub[wasm:control:req:tester_isolated] (Max Concurrency: 5, PID: 37756)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.tester: [SYSTEM] Initializing WasmBroker &amp; Scenarios...</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  wasm.tester: </span></span>
<span class="line"><span>&gt;&gt;&gt; [PHASE] Starting Test Suite: SANDBOX &lt;&lt;&lt;</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.sandbox: </span></span>
<span class="line"><span>=== [START] Executing Sandbox &amp; Compute Scenarios ===</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner: </span></span>
<span class="line"><span>[Control Plane] Shifting WasmCgroup Policy Tier -&gt; SYSTEM</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [2545f1cf] Global Cgroup default tier updated -&gt; SYSTEM</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   └─ Policy successfully enforced to SYSTEM.</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.sandbox: </span></span>
<span class="line"><span>--- Running Suite: WasmCG Resilience ---</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner: </span></span>
<span class="line"><span>[TEST] WasmCG: Unregistered API Call (O(1) Guard) (Func: hack_system_memory)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.wasm: [AOT Compile] Compiling phase.wasm (Only once per process)...</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.wasm: [AOT Compile] phase.wasm cached successfully.</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [worker-4494654640] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 93.15ms | Output: Phase Collapse Failed: Drift topology malformed (json_parse_err). Root envelope rejected: unknown variant \`hack_system_memory\`, expected one of \`execu</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.sandbox: </span></span>
<span class="line"><span>--- Running Suite: Determinism &amp; Legacy Isolation ---</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [a32d926a] Entering Python Legacy Jail (Tier: SYSTEM, Cached: True)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.python: [Deno RPC Request] -&gt; {&quot;jsonrpc&quot;: &quot;2.0&quot;, &quot;method&quot;: &quot;execute&quot;, &quot;params&quot;: {&quot;code&quot;: &quot;print(sum([x**2 for x in range(1000)]))&quot;, &quot;context&quot;: {&quot;sandbox_tier&quot;: &quot;SYSTEM&quot;, &quot;timestamp&quot;: 1793761857710, &quot;timeout&quot;: 5.0, &quot;seed&quot;: &quot;dphi_secure_fallback_seed&quot;}}, &quot;id&quot;: 4}</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [a32d926a] [Perf] (Cached) Wait: 116.09ms | Exec: 4.11ms | Total: 120.20ms</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [a32d926a] Sandbox Metrics: {&#39;mem_usage_bytes&#39;: 18215, &#39;mem_peak_bytes&#39;: 41209, &#39;fuel_consumed&#39;: 0, &#39;fuel_remaining&#39;: -1, &#39;tier&#39;: &#39;SYSTEM&#39;, &#39;timing_ms&#39;: {&#39;wait&#39;: 116.09, &#39;spawn&#39;: 0.0, &#39;exec&#39;: 4.11}}</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 138.84ms | Output: 332833500 </span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [f7805df8] Entering Python Legacy Jail (Tier: SYSTEM, Cached: True)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.python: [Deno RPC Request] -&gt; {&quot;jsonrpc&quot;: &quot;2.0&quot;, &quot;method&quot;: &quot;execute&quot;, &quot;params&quot;: {&quot;code&quot;: &quot;def is_prime(n):\\n    if n &lt; 2: return False\\n    for i in range(2, int(n**0.5) + 1):\\n        if n % i == 0: return False\\n    return True\\nprimes = [p for p in range(30000) if is_prime(p)]\\nprint(f&#39;Found {len(primes)} primes&#39;)&quot;, &quot;context&quot;: {&quot;sandbox_tier&quot;: &quot;SYSTEM&quot;, &quot;timestamp&quot;: 1793761857849, &quot;timeout&quot;: 5.0, &quot;seed&quot;: &quot;dphi_secure_fallback_seed&quot;}}, &quot;id&quot;: 4}</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [f7805df8] [Perf] (Cached) Wait: 1140.58ms | Exec: 40.91ms | Total: 1181.49ms</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [f7805df8] Sandbox Metrics: {&#39;mem_usage_bytes&#39;: 80793, &#39;mem_peak_bytes&#39;: 101108, &#39;fuel_consumed&#39;: 0, &#39;fuel_remaining&#39;: -1, &#39;tier&#39;: &#39;SYSTEM&#39;, &#39;timing_ms&#39;: {&#39;wait&#39;: 1140.58, &#39;spawn&#39;: 0.0, &#39;exec&#39;: 40.91}}</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 1203.18ms | Output: Found 3245 primes </span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [ff17fc67] Entering Python Legacy Jail (Tier: SYSTEM, Cached: True)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.python: [Deno RPC Request] -&gt; {&quot;jsonrpc&quot;: &quot;2.0&quot;, &quot;method&quot;: &quot;execute&quot;, &quot;params&quot;: {&quot;code&quot;: &quot;import json\\ndata = [{&#39;id&#39;: i, &#39;val&#39;: i * 2.5, &#39;active&#39;: i % 2 == 0} for i in range(20000)]\\nserialized = json.dumps(data)\\nparsed = json.loads(serialized)\\nprint(f&#39;Processed {len(parsed)} records&#39;)&quot;, &quot;context&quot;: {&quot;sandbox_tier&quot;: &quot;SYSTEM&quot;, &quot;timestamp&quot;: 1793761859053, &quot;timeout&quot;: 5.0, &quot;seed&quot;: &quot;dphi_secure_fallback_seed&quot;}}, &quot;id&quot;: 4}</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [ff17fc67] [Perf] (Cached) Wait: 1132.72ms | Exec: 174.19ms | Total: 1306.91ms</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [ff17fc67] Sandbox Metrics: {&#39;mem_usage_bytes&#39;: 6707671, &#39;mem_peak_bytes&#39;: 6727986, &#39;fuel_consumed&#39;: 0, &#39;fuel_remaining&#39;: -1, &#39;tier&#39;: &#39;SYSTEM&#39;, &#39;timing_ms&#39;: {&#39;wait&#39;: 1132.72, &#39;spawn&#39;: 0.0, &#39;exec&#39;: 174.19}}</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 1339.44ms | Output: Processed 20000 records </span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [22d9ec80] Entering Python Legacy Jail (Tier: SYSTEM, Cached: True)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.python: [Deno RPC Request] -&gt; {&quot;jsonrpc&quot;: &quot;2.0&quot;, &quot;method&quot;: &quot;execute&quot;, &quot;params&quot;: {&quot;code&quot;: &quot;with open(&#39;/etc/passwd&#39;, &#39;r&#39;) as f:\\n    print(f.read())&quot;, &quot;context&quot;: {&quot;sandbox_tier&quot;: &quot;SYSTEM&quot;,&quot;timestamp&quot;: 1793761860393, &quot;timeout&quot;: 5.0, &quot;seed&quot;: &quot;dphi_secure_fallback_seed&quot;}}, &quot;id&quot;: 4}</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [22d9ec80] [Perf] (Cached) Wait: 978.99ms | Exec: 9.81ms | Total: 988.80ms</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [22d9ec80] Sandbox Metrics: {&#39;mem_usage_bytes&#39;: 62888, &#39;mem_peak_bytes&#39;: 158485, &#39;fuel_consumed&#39;: 0, &#39;fuel_remaining&#39;: -1, &#39;tier&#39;: &#39;SYSTEM&#39;, &#39;timing_ms&#39;: {&#39;wait&#39;: 978.99, &#39;spawn&#39;: 0.0, &#39;exec&#39;: 9.81}}</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 1009.11ms | Output: FileNotFoundError: [44, &#39;No such file or directory&#39;]</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [worker-4494654640] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [bfb291ca] Entering Python Legacy Jail (Tier: SYSTEM, Cached: True)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.python: [Deno RPC Request] -&gt; {&quot;jsonrpc&quot;: &quot;2.0&quot;, &quot;method&quot;: &quot;execute&quot;, &quot;params&quot;: {&quot;code&quot;: &quot;import socket\\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\\ns.connect((&#39;8.8.8.8&#39;, 53))&quot;, &quot;context&quot;: {&quot;sandbox_tier&quot;: &quot;SYSTEM&quot;, &quot;timestamp&quot;: 1793761861403, &quot;timeout&quot;: 5.0, &quot;seed&quot;: &quot;dphi_secure_fallback_seed&quot;}}, &quot;id&quot;: 4}</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [bfb291ca] [Perf] (Cached) Wait: 1131.89ms | Exec: 20.41ms | Total: 1152.30ms</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [bfb291ca] Sandbox Metrics: {&#39;mem_usage_bytes&#39;: 64762, &#39;mem_peak_bytes&#39;: 160474, &#39;fuel_consumed&#39;: 0, &#39;fuel_remaining&#39;: -1, &#39;tier&#39;: &#39;SYSTEM&#39;, &#39;timing_ms&#39;: {&#39;wait&#39;: 1131.89, &#39;spawn&#39;: 0.0, &#39;exec&#39;: 20.41}}</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 1170.83ms | Output: OSError: [23, &#39;Host is unreachable&#39;]</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [1d31e7db] Entering Python Legacy Jail (Tier: SYSTEM, Cached: True)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.python: [Deno RPC Request] -&gt; {&quot;jsonrpc&quot;: &quot;2.0&quot;, &quot;method&quot;: &quot;execute&quot;, &quot;params&quot;: {&quot;code&quot;: &quot;import os\\nenv = os.environ\\n\\n## 1. Active Gateway Permeability: Verify that the explicitly whitelisted orchestration marker successfully penetrates the host-to-sandbox bridge\\nis_gateway_working = env.get(&#39;FIBER_ISOLATION_MARKER&#39;) == &#39;1&#39;\\n\\n## 2. Host Environment Segregation: Guarantee strict absence of platform-specific or CI-injected variables to maintain absolute determinism across OS architectures.\\nblocked_keys = [&#39;GITHUB_ACTIONS&#39;, &#39;COMPUTERNAME&#39;, &#39;XPC_SERVICE_NAME&#39;, &#39;COMMAND_MODE&#39;, &#39;TERM_PROGRAM&#39;]\\nis_host_blocked = all(k not in env for k in blocked_keys)\\n\\n## 3. State Entropy Constraint: Strictly cap the total quantity of environment variables\\nis_minimal = len(env) &lt;= 11\\n\\n## [Assertion] A controlled closed system\\nisolated = is_gateway_working and is_host_blocked and is_minimal\\n\\nprint(f&#39;Isolated: {isolated} | Dump: {dict(env)}&#39;)&quot;, &quot;context&quot;: {&quot;sandbox_tier&quot;: &quot;SYSTEM&quot;, &quot;timestamp&quot;: 1793761862574, &quot;timeout&quot;: 5.0, &quot;seed&quot;: &quot;dphi_secure_fallback_seed&quot;}}, &quot;id&quot;: 4}</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [1d31e7db] [Perf] (Cached) Wait: 1142.49ms | Exec: 5.83ms | Total: 1148.32ms</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [1d31e7db] Sandbox Metrics: {&#39;mem_usage_bytes&#39;: 20018, &#39;mem_peak_bytes&#39;: 56084, &#39;fuel_consumed&#39;: 0, &#39;fuel_remaining&#39;: -1, &#39;tier&#39;: &#39;SYSTEM&#39;, &#39;timing_ms&#39;: {&#39;wait&#39;: 1142.49, &#39;spawn&#39;: 0.0, &#39;exec&#39;: 5.83}}</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 1167.11ms | Output: Isolated: True | Dump: {&#39;USER&#39;: &#39;web_user&#39;, &#39;LOGNAME&#39;: &#39;web_user&#39;, &#39;PATH&#39;: &#39;/&#39;, &#39;PWD&#39;: &#39;/&#39;, &#39;HOME&#39;: &#39;/home/pyodide&#39;, &#39;LANG&#39;: &#39;en_US-u-va-posix.UTF-8&#39;,</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [0c78345e] Entering Python Legacy Jail (Tier: SYSTEM, Cached: True)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.python: [Deno RPC Request] -&gt; {&quot;jsonrpc&quot;: &quot;2.0&quot;, &quot;method&quot;: &quot;execute&quot;, &quot;params&quot;: {&quot;code&quot;: &quot;import subprocess\\nsubprocess.run([&#39;ls&#39;, &#39;-la&#39;])&quot;, &quot;context&quot;: {&quot;sandbox_tier&quot;: &quot;SYSTEM&quot;, &quot;timestamp&quot;: 1793761863742, &quot;timeout&quot;: 5.0, &quot;seed&quot;: &quot;dphi_secure_fallback_seed&quot;}}, &quot;id&quot;: 4}</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [0c78345e] [Perf] (Cached) Wait: 1139.01ms | Exec: 16.15ms | Total: 1155.17ms</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [0c78345e] Sandbox Metrics: {&#39;mem_usage_bytes&#39;: 204542, &#39;mem_peak_bytes&#39;: 516002, &#39;fuel_consumed&#39;: 0, &#39;fuel_remaining&#39;: -1, &#39;tier&#39;: &#39;SYSTEM&#39;, &#39;timing_ms&#39;: {&#39;wait&#39;: 1139.01, &#39;spawn&#39;: 0.0, &#39;exec&#39;: 16.15}}</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 1172.85ms | Output: OSError: [138, &#39;emscripten does not support processes.&#39;]</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [8e070648] Entering Python Legacy Jail (Tier: SYSTEM, Cached: True)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.python: [Deno RPC Request] -&gt; {&quot;jsonrpc&quot;: &quot;2.0&quot;, &quot;method&quot;: &quot;execute&quot;, &quot;params&quot;: {&quot;code&quot;: &quot;import threading\\ndef f(): pass\\nt = threading.Thread(target=f)\\nt.start()&quot;, &quot;context&quot;: {&quot;sandbox_tier&quot;: &quot;SYSTEM&quot;, &quot;timestamp&quot;: 1793761864915, &quot;timeout&quot;: 5.0, &quot;seed&quot;: &quot;dphi_secure_fallback_seed&quot;}}, &quot;id&quot;: 4}</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [8e070648] [Perf] (Cached) Wait: 1165.95ms | Exec: 15.68ms | Total: 1181.62ms</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [8e070648] Sandbox Metrics: {&#39;mem_usage_bytes&#39;: 158639, &#39;mem_peak_bytes&#39;: 300034, &#39;fuel_consumed&#39;: 0, &#39;fuel_remaining&#39;: -1, &#39;tier&#39;: &#39;SYSTEM&#39;, &#39;timing_ms&#39;: {&#39;wait&#39;: 1165.95, &#39;spawn&#39;: 0.0, &#39;exec&#39;: 15.68}}</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 1200.77ms | Output: RuntimeError: [&quot;can&#39;t start new thread&quot;]</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [160bfd3c] Entering Python Legacy Jail (Tier: SYSTEM, Cached: True)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.python: [Deno RPC Request] -&gt; {&quot;jsonrpc&quot;: &quot;2.0&quot;, &quot;method&quot;: &quot;execute&quot;, &quot;params&quot;: {&quot;code&quot;: &quot;import sys\\nsys.exit(1)&quot;, &quot;context&quot;: {&quot;sandbox_tier&quot;: &quot;SYSTEM&quot;, &quot;timestamp&quot;: 1793761866117, &quot;timeout&quot;: 5.0, &quot;seed&quot;: &quot;dphi_secure_fallback_seed&quot;}}, &quot;id&quot;: 4}</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [160bfd3c] [Perf] (Cached) Wait: 1317.34ms | Exec: 16.62ms | Total: 1333.96ms</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [160bfd3c] Sandbox Metrics: {&#39;mem_usage_bytes&#39;: 176414, &#39;mem_peak_bytes&#39;: 272260, &#39;fuel_consumed&#39;: 0, &#39;fuel_remaining&#39;: -1, &#39;tier&#39;: &#39;SYSTEM&#39;, &#39;timing_ms&#39;: {&#39;wait&#39;: 1317.34, &#39;spawn&#39;: 0.0, &#39;exec&#39;: 16.62}}</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 1354.11ms | Output: Error: Unhandled async error: PythonError</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [worker-4494654640] enforced: Tier=STANDARD, Mem=64MB, Fuel=10,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [eee87dde] Entering Python Legacy Jail (Tier: STANDARD, Cached: True)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.python: [Deno RPC Request] -&gt; {&quot;jsonrpc&quot;: &quot;2.0&quot;, &quot;method&quot;: &quot;execute&quot;, &quot;params&quot;: {&quot;code&quot;: &quot;x = 2\\nwhile True: x = x ** 2&quot;, &quot;context&quot;: {&quot;sandbox_tier&quot;: &quot;STANDARD&quot;, &quot;timestamp&quot;: 1793761867471, &quot;timeout&quot;: 5.0, &quot;seed&quot;: &quot;dphi_secure_fallback_seed&quot;}}, &quot;id&quot;: 4}</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | WARN  |  wasm.broker: [eee87dde] Remote execution timeout (5.0s) on wasm:execute:stream:tester_isolated. (Infinite loop or payload blocked)</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 5004.22ms | Output: Remote execution timeout (5.0s)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [c6026424] Entering Python Legacy Jail (Tier: STANDARD, Cached: True)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.python: [Deno RPC Request] -&gt; {&quot;jsonrpc&quot;: &quot;2.0&quot;, &quot;method&quot;: &quot;execute&quot;, &quot;params&quot;: {&quot;code&quot;: &quot;lst = []\\nwhile True:\\n    lst.append(bytearray(10 * 1024 * 1024))&quot;, &quot;context&quot;: {&quot;sandbox_tier&quot;:&quot;STANDARD&quot;, &quot;timestamp&quot;: 1793761872476, &quot;timeout&quot;: 5.0, &quot;seed&quot;: &quot;dphi_secure_fallback_seed&quot;}}, &quot;id&quot;: 4}</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [c6026424] [Perf] (Cached) Wait: 0.00ms | Exec: 667.00ms | Total: 667.00ms</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [c6026424] Sandbox Metrics: {&#39;mem_usage_bytes&#39;: -27152911, &#39;mem_peak_bytes&#39;: -27073097, &#39;fuel_consumed&#39;: 11765, &#39;fuel_remaining&#39;: 9988235, &#39;tier&#39;: &#39;STANDARD&#39;, &#39;timing_ms&#39;: {&#39;wait&#39;: 0.0, &#39;spawn&#39;: 0.0, &#39;exec&#39;: 667.0}}</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 804.98ms | Output: MemoryError: </span></span>
<span class="line"><span> LOG | SYSTEM | WARN  |  daemon.taskwasm: [eee87dde] Sandbox Execution Timeout (Infinite loop/Deadlock defended).</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [eea4efcc] Entering Python Legacy Jail (Tier: SYSTEM, Cached: True)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.python: [Deno RPC Request] -&gt; {&quot;jsonrpc&quot;: &quot;2.0&quot;, &quot;method&quot;: &quot;execute&quot;, &quot;params&quot;: {&quot;code&quot;: &quot;import time\\nprint(f&#39;{time.time()}|{time.perf_counter()}&#39;)&quot;, &quot;context&quot;: {&quot;sandbox_tier&quot;: &quot;SYSTEM&quot;, &quot;timestamp&quot;: 1793761876287, &quot;timeout&quot;: 5.0, &quot;seed&quot;: &quot;dphi_secure_fallback_seed&quot;}}, &quot;id&quot;: 4}</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [eea4efcc] [Perf] (Cached) Wait: 0.01ms | Exec: 6.44ms | Total: 6.45ms</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [eea4efcc] Sandbox Metrics: {&#39;mem_usage_bytes&#39;: 17400, &#39;mem_peak_bytes&#39;: 38854, &#39;fuel_consumed&#39;: 0, &#39;fuel_remaining&#39;: -1, &#39;tier&#39;: &#39;SYSTEM&#39;, &#39;timing_ms&#39;: {&#39;wait&#39;: 0.01, &#39;spawn&#39;: 0.0, &#39;exec&#39;: 6.44}}</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 39.71ms | Output: 1793761876287.0|0.001 </span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [ade9ffe8] Entering Python Legacy Jail (Tier: SYSTEM, Cached: True)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.python: [Deno RPC Request] -&gt; {&quot;jsonrpc&quot;: &quot;2.0&quot;, &quot;method&quot;: &quot;execute&quot;, &quot;params&quot;: {&quot;code&quot;: &quot;import time, random\\nprint(f&#39;{time.time()}|{random.random()}&#39;)&quot;, &quot;context&quot;: {&quot;timestamp&quot;: 1600000000, &quot;seed&quot;: &quot;proof_of_compute_seed_777&quot;, &quot;sandbox_tier&quot;: &quot;SYSTEM&quot;, &quot;timeout&quot;: 5.0}}, &quot;id&quot;: 4}</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [ade9ffe8] [Perf] (Cached) Wait: 0.00ms | Exec: 5.51ms | Total: 5.51ms</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [ade9ffe8] Sandbox Metrics: {&#39;mem_usage_bytes&#39;: 17372, &#39;mem_peak_bytes&#39;: 39023, &#39;fuel_consumed&#39;: 0, &#39;fuel_remaining&#39;: -1, &#39;tier&#39;: &#39;SYSTEM&#39;, &#39;timing_ms&#39;: {&#39;wait&#39;: 0.0, &#39;spawn&#39;:0.0, &#39;exec&#39;: 5.51}}</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 30.84ms | Output: 1600000000.0|0.7736597448236722 </span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [4cf6baed] Entering Python Legacy Jail (Tier: SYSTEM, Cached: True)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.python: [Deno RPC Request] -&gt; {&quot;jsonrpc&quot;: &quot;2.0&quot;, &quot;method&quot;: &quot;execute&quot;, &quot;params&quot;: {&quot;code&quot;: &quot;import random, os\\nprint(f&#39;{random.random()}|{os.urandom(4).hex()}&#39;)&quot;, &quot;context&quot;: {&quot;phase&quot;: &quot;TEST_EXECUTION&quot;, &quot;flow_id&quot;: &quot;111301127202557954&quot;, &quot;timestamp&quot;: 1793761876360, &quot;timeout&quot;: 5.0, &quot;seed&quot;: &quot;dphi_secure_fallback_seed&quot;}}, &quot;id&quot;: 4}</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [4cf6baed] [Perf] (Cached) Wait: 0.00ms | Exec: 5.18ms | Total: 5.18ms</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [4cf6baed] Sandbox Metrics: {&#39;mem_usage_bytes&#39;: 17367, &#39;mem_peak_bytes&#39;: 40733, &#39;fuel_consumed&#39;: 0, &#39;fuel_remaining&#39;: -1, &#39;tier&#39;: &#39;SYSTEM&#39;, &#39;timing_ms&#39;: {&#39;wait&#39;: 0.0, &#39;spawn&#39;:0.0, &#39;exec&#39;: 5.18}}</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [ad79c1ac] Entering Python Legacy Jail (Tier: SYSTEM, Cached: True)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.python: [Deno RPC Request] -&gt; {&quot;jsonrpc&quot;: &quot;2.0&quot;, &quot;method&quot;: &quot;execute&quot;, &quot;params&quot;: {&quot;code&quot;: &quot;import random, os\\nprint(f&#39;{random.random()}|{os.urandom(4).hex()}&#39;)&quot;, &quot;context&quot;: {&quot;phase&quot;: &quot;TEST_EXECUTION&quot;, &quot;flow_id&quot;: &quot;111301127202557954&quot;, &quot;timestamp&quot;: 1793761876390, &quot;timeout&quot;: 5.0, &quot;seed&quot;: &quot;dphi_secure_fallback_seed&quot;}}, &quot;id&quot;: 4}</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [ad79c1ac] [Perf] (Cached) Wait: 0.00ms | Exec: 5.17ms | Total: 5.18ms</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [ad79c1ac] Sandbox Metrics: {&#39;mem_usage_bytes&#39;: 17430, &#39;mem_peak_bytes&#39;: 40763, &#39;fuel_consumed&#39;: 0, &#39;fuel_remaining&#39;: -1, &#39;tier&#39;: &#39;SYSTEM&#39;, &#39;timing_ms&#39;: {&#39;wait&#39;: 0.0, &#39;spawn&#39;:0.0, &#39;exec&#39;: 5.17}}</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 0.00ms | Output: PRNG sequences are 100% identical (0.7946015362095357|71a45460)</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.sandbox: </span></span>
<span class="line"><span>--- Running Suite: Causality (Epoch-Tick) ---</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner: </span></span>
<span class="line"><span>[TEST] Event: Generate Topos Anchor ID (Func: generate_topos_id)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [worker-4494654640] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 1.74ms | Output: {&quot;id&quot;: &quot;111301210291568640&quot;}</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner: </span></span>
<span class="line"><span>[TEST] Event: Generate Phase &amp; Nexus ID (Func: generate_phase_id)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [worker-4494832848] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 1.54ms | Output: {&quot;nexus_id&quot;: 25370634, &quot;phase_id&quot;: 25370634}</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner: </span></span>
<span class="line"><span>[TEST] DI: Phase with Injected State (Func: generate_phase_id)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [worker-4494879504] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 1.85ms | Output: {&quot;nexus_id&quot;: 3448310519, &quot;phase_id&quot;: 3448129736}</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.sandbox: </span></span>
<span class="line"><span>--- Running Suite: Tripartite Parity ---</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner: </span></span>
<span class="line"><span>[TEST] Parity: Validate All 3 IDs (Func: verify_parity)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [worker-4494880112] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 1.03ms | Output: {&quot;is_valid&quot;: false}</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner: </span></span>
<span class="line"><span>[TEST] Parity: Recover Missing Phase (Func: verify_parity)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [worker-4494831888] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 0.96ms | Output: {&quot;is_valid&quot;: true, &quot;recovered_missing&quot;: 810427, &quot;recovered_type&quot;: &quot;phase_id&quot;}</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner: </span></span>
<span class="line"><span>[TEST] Parity: Insufficient Info (Func: verify_parity)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [worker-4494654640] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 0.82ms | Output: At least two identification IDs are required for parity recovery and correction</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.sandbox: </span></span>
<span class="line"><span>--- Running Suite: FFI Robustness ---</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner: </span></span>
<span class="line"><span>[TEST] FFI Guard: Malformed JSON (Func: generate_phase_id)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [worker-4494832848] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 0.87ms | Output: Invalid PhaseRequest JSON</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.sandbox: </span></span>
<span class="line"><span>--- Running Suite: Resource Fuel Profiling ---</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner: </span></span>
<span class="line"><span>[TEST] Profile: 10KB Payload Hashing (Func: compute_fingerprint)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [worker-4494879504] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 1.06ms | Output: {&quot;fingerprint&quot;: &quot;72559e6d4fe02260f550ca4e686c309ba696f187b74857c9b0c1a49a7579ec33&quot;, &quot;input_bytes&quot;: 10017}</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner: </span></span>
<span class="line"><span>[Control Plane] Shifting WasmCgroup Policy Tier -&gt; STANDARD</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [46496c1f] Global Cgroup default tier updated -&gt; STANDARD</span></span>
<span class="line"><span>SUMMARY🔥| TEST_EXECUTION | INFO  |  [G:1.0] [Acc:2.4] base.scene.runner:   └─ Policy successfully enforced to STANDARD.</span></span>
<span class="line"><span>SUMMARY🔥| TEST_EXECUTION | INFO  |  [G:0.9] [Acc:2.5] base.scene.runner: </span></span>
<span class="line"><span>[TEST] Boundary Test: 40MB Exhaustion under STANDARD Tier (Expect Trap) (Func: compute_fingerprint)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [worker-4494880112] enforced: Tier=STANDARD, Mem=64MB, Fuel=10,000,000</span></span>
<span class="line"><span>SUMMARY🔥| TEST_EXECUTION | INFO  |  [G:0.9] [Acc:-0.3] base.scene.runner:   [PASS] Time: 455.91ms | Output: WASM Invoke Failed: error while executing at wasm backtrace:     0:  0x4158c - &lt;unknown&gt;!&lt;wasm function 294&gt; Caused by:     wasm trap: all fuel consu</span></span>
<span class="line"><span>SUMMARY🔥| TEST_EXECUTION | INFO  |  [G:0.8] [Acc:-0.2] base.scene.runner: </span></span>
<span class="line"><span>[Control Plane] Shifting WasmCgroup Policy Tier -&gt; SYSTEM</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [4d33c093] Global Cgroup default tier updated -&gt; SYSTEM</span></span>
<span class="line"><span>SUMMARY🔥| TEST_EXECUTION | INFO  |  [G:0.8] [Acc:-0.1] base.scene.runner:   └─ Policy successfully enforced to SYSTEM.</span></span>
<span class="line"><span>SUMMARY🔥| TEST_EXECUTION | INFO  |  [G:0.8] base.scene.runner: </span></span>
<span class="line"><span>=== [DONE] Scenarios Completed: 24 Passed, 0 Failed ===</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  wasm.tester: </span></span>
<span class="line"><span>&gt;&gt;&gt; [PHASE] Starting Test Suite: ANCHOR &lt;&lt;&lt;</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.eco: </span></span>
<span class="line"><span>=== [START] Unified Master Pipeline (Eco + Anchor) ===</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.eco: </span></span>
<span class="line"><span>=== [PHASE 1] Executing Unified Ecosystem &amp; Eco Structural Scenarios ===</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.eco: </span></span>
<span class="line"><span>--- [Data Pipeline] Phase 2: Canonical &amp; Evolution-Bound Provenance Fingerprinting ---</span></span>
<span class="line"><span>SUMMARY🔥| TEST_EXECUTION | INFO  |  [G:0.7] [Acc:0.1] base.scene.runner: </span></span>
<span class="line"><span>[TEST] Provenance [1/3]: Compute JCS Canonical Data Fingerprint (Func: compute_fingerprint)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [worker-4494831888] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span>SUMMARY🔥| TEST_EXECUTION | INFO  |  [G:0.7] [Acc:0.2] base.scene.runner:   [PASS] Time: 1.73ms | Output: {&quot;fingerprint&quot;: &quot;fbc014393530e2f81799bb5588710de0cafd0521561e79a4cc25f19f0e59bda8&quot;, &quot;input_bytes&quot;: 124}</span></span>
<span class="line"><span>SUMMARY🔥| TEST_EXECUTION | INFO  |  [G:0.7] [Acc:0.3] base.scene.runner: </span></span>
<span class="line"><span>[TEST] Provenance [2/3]: Seal Evolution-Bound Transition Fingerprint (Func: compute_fingerprint)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [worker-4494654640] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span>SUMMARY🔥| TEST_EXECUTION | INFO  |  [G:0.7] [Acc:0.4] base.scene.runner:   [PASS] Time: 0.94ms | Output: {&quot;fingerprint&quot;: &quot;721664b151a7cbd874ceda3ab8f57065c4a49c69eed666850910cfab82f27636&quot;, &quot;input_bytes&quot;: 239, &quot;intent_action&quot;: &quot;record_audit_event&quot;, &quot;state_</span></span>
<span class="line"><span>SUMMARY🔥| TEST_EXECUTION | INFO  |  [G:0.6] [Acc:0.5] base.scene.runner: </span></span>
<span class="line"><span>[TEST] Provenance [3/3]: Reject Malformed Transition Envelope (Guard Check) (Func: compute_fingerprint)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [worker-4494832848] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span>SUMMARY🔥| TEST_EXECUTION | INFO  |  [G:0.6] [Acc:0.6] base.scene.runner:   [PASS] Time: 0.86ms | Output: TransitionPayload missing required intent_action or intent_payload</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.eco: </span></span>
<span class="line"><span>--- [Data Pipeline] Phase 3: Epoch Initialization &amp; Parity Triplet ---</span></span>
<span class="line"><span>SUMMARY🔥| TEST_EXECUTION | INFO  |  [G:0.6] [Acc:0.8] base.scene.runner: </span></span>
<span class="line"><span>[TEST] Pipeline: Generate Parity Triplet (init_epoch) (Func: init_epoch)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [worker-4494879504] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span>SUMMARY🔥| TEST_EXECUTION | INFO  |  [G:0.6] [Acc:0.9] base.scene.runner:   [PASS] Time: 0.72ms | Output: {&quot;nexus_id&quot;: 2038837443, &quot;phase_id&quot;: 2164666563, &quot;topos_id&quot;: &quot;111301212606824448&quot;}</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.eco: </span></span>
<span class="line"><span>--- [Data Pipeline] Phase 4: Self-Healing Recovery ---</span></span>
<span class="line"><span>SUMMARY🔥| TEST_EXECUTION | INFO  |  [G:0.6] [Acc:1.0] base.scene.runner: </span></span>
<span class="line"><span>[TEST] Pipeline: Recover Lost Data via XOR Parity (Func: verify_parity)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [worker-4494880112] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span>SUMMARY🔥| TEST_EXECUTION | INFO  |  [G:0.6] [Acc:1.1] base.scene.runner:   [PASS] Time: 0.72ms | Output: {&quot;is_valid&quot;: true, &quot;recovered_missing&quot;: 810427, &quot;recovered_type&quot;: &quot;phase_id&quot;}</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.eco: </span></span>
<span class="line"><span>--- [State Engine] Phase 3: Epoch Sealing &amp; Consensus ---</span></span>
<span class="line"><span>SUMMARY🔥| TEST_EXECUTION | INFO  |  [G:0.5] [Acc:1.2] base.scene.runner: </span></span>
<span class="line"><span>[TEST] Engine: Seal Epoch &amp; Finalize State Transition (Func: seal_epoch)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [worker-4494831888] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span>SUMMARY🔥| TEST_EXECUTION | INFO  |  [G:0.5] [Acc:1.3] base.scene.runner:   [PASS] Time: 1.50ms | Output: {&quot;anchor_result&quot;: {&quot;commit_hash&quot;: &quot;90b3abc4210b7aeab6646ea8dbc73b7c10f1462dc788424c5d7e20ef3118719a&quot;, &quot;payload_json&quot;: &quot;{\\&quot;cached_states\\&quot;:{\\&quot;tension_r</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.eco: </span></span>
<span class="line"><span>--- [Eco Pipeline] Phase 2: Trustless Execution (Sandboxed) ---</span></span>
<span class="line"><span>SUMMARY🔥| TEST_EXECUTION | INFO  |  [G:0.5] [Acc:1.4] base.scene.runner: </span></span>
<span class="line"><span>[TEST] Eco: Execute Constrained Task (Fuel Tracked) (Func: execute_code)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [worker-4494654640] enforced: Tier=STANDARD, Mem=64MB, Fuel=10,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [61702e64] Entering Python Legacy Jail (Tier: STANDARD, Cached: True)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.python: [Deno RPC Request] -&gt; {&quot;jsonrpc&quot;: &quot;2.0&quot;, &quot;method&quot;: &quot;execute&quot;, &quot;params&quot;: {&quot;code&quot;: &quot;\\ndef analyze_risk():\\n    return &#39;Validated Risk Score: 42.5&#39;\\nprint(analyze_risk())\\n&quot;, &quot;context&quot;: {&quot;phase&quot;: &quot;TEST_EXECUTION&quot;, &quot;flow_id&quot;: &quot;111301127202557954&quot;, &quot;timestamp&quot;: 1793761876967, &quot;timeout&quot;: 5.0, &quot;seed&quot;: &quot;dphi_secure_fallback_seed&quot;}}, &quot;id&quot;: 4}</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [61702e64] [Perf] (Cached) Wait: 0.00ms | Exec: 7.07ms | Total: 7.07ms</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [61702e64] Sandbox Metrics: {&#39;mem_usage_bytes&#39;: 22587, &#39;mem_peak_bytes&#39;: 47731, &#39;fuel_consumed&#39;: 9525, &#39;fuel_remaining&#39;: 9990475, &#39;tier&#39;: &#39;STANDARD&#39;, &#39;timing_ms&#39;: {&#39;wait&#39;: 0.0, &#39;spawn&#39;: 0.0, &#39;exec&#39;: 7.07}}</span></span>
<span class="line"><span>SUMMARY🔥| TEST_EXECUTION | INFO  |  [G:0.5] [Acc:1.6] base.scene.runner:   [PASS] Time: 21.97ms | Output: Validated Risk Score: 42.5 </span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.eco: </span></span>
<span class="line"><span>--- [Exchange Pipeline] P2P Order Ingress &amp; Deterministic Settlement ---</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.eco: </span></span>
<span class="line"><span>--- [Gateway Ingress] Validating trade intent from f7db9bd9... ---</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [worker-4494832848] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.eco:   └─ [Ingress Validated] Topos: 111301212724264960, Phase: 25376783</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.eco: </span></span>
<span class="line"><span>--- [Gateway Ingress] Validating trade intent from 8fa3bec0... ---</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [worker-4494879504] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.eco:   └─ [Ingress Validated] Topos: 111301212732653568, Phase: 2173061120</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.eco: </span></span>
<span class="line"><span>--- [Matching Engine] Binding Execution State A (Bid) and State B (Ask) ---</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.eco:   └─ [Matched] Opposite intents paired successfully. Remaining imbalance = 0.</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.eco: </span></span>
<span class="line"><span>--- [Trade Settlement] Finalizing clearing via 3-of-3 Multi-sig Consensus ---</span></span>
<span class="line"><span>SUMMARY🔥| TEST_EXECUTION | INFO  |  [G:0.5] [Acc:1.7] base.scene.runner: </span></span>
<span class="line"><span>[TEST] Trade Settlement: 3-of-3 Multi-sig State Committed to Nexus (Func: seal_epoch)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [worker-4494880112] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span>SUMMARY🔥| TEST_EXECUTION | INFO  |  [G:0.5] [Acc:1.8] base.scene.runner:   [PASS] Time: 1.40ms | Output: {&quot;anchor_result&quot;: {&quot;commit_hash&quot;: &quot;0d3876a79d9a315d56265f789012b158d4b67c970455f7a9f30cf57eeccc3b57&quot;, &quot;payload_json&quot;: &quot;{\\&quot;cached_states\\&quot;:{},\\&quot;parent_</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  adapter.settlement: [ExchangeAdapter] Settlement Finalized. Topos: clearing_batch_1793761876, Parity: 2147840015, Cost: $0.000350</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.eco: </span></span>
<span class="line"><span>[Exchange Ready] Payload for External Network:</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;batch_id&quot;: &quot;clearing_batch_1793761876&quot;,</span></span>
<span class="line"><span>  &quot;state_root&quot;: &quot;2147840015&quot;,</span></span>
<span class="line"><span>  &quot;attestations&quot;: [],</span></span>
<span class="line"><span>  &quot;gas_used&quot;: 35000,</span></span>
<span class="line"><span>  &quot;timestamp&quot;: 1793761876</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.eco: </span></span>
<span class="line"><span>=== [PHASE 2] Executing AnchorStore Cryptographic Security Boundaries ===</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.eco: </span></span>
<span class="line"><span>--- Running Suite: Authorized Multi-sig (2-of-3 Consensus) ---</span></span>
<span class="line"><span>SUMMARY🔥| TEST_EXECUTION | INFO  |  [G:0.5] [Acc:1.9] base.scene.runner: </span></span>
<span class="line"><span>[TEST] AnchorStore: 2-of-3 Valid Multi-sig (Func: seal_epoch)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [worker-4494831888] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span>SUMMARY🔥| TEST_EXECUTION | INFO  |  [G:0.5] [Acc:2.0] base.scene.runner:   [PASS] Time: 1.97ms | Output: {&quot;anchor_result&quot;: {&quot;commit_hash&quot;: &quot;29a527dc026483c40665c5ba2d94ce158a63518dff77f8d9327b303a3dde4a0d&quot;, &quot;payload_json&quot;: &quot;{\\&quot;cached_states\\&quot;:{},\\&quot;parent_</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.eco: </span></span>
<span class="line"><span>--- Running Suite: Insufficient Signatures ---</span></span>
<span class="line"><span>SUMMARY🔥| TEST_EXECUTION | INFO  |  [G:0.4] [Acc:2.1] base.scene.runner: </span></span>
<span class="line"><span>[TEST] AnchorStore: Reject Insufficient Threshold (Func: seal_epoch)</span></span>
<span class="line"><span>SUMMARY🔥| SYSTEM | INFO  |  [G:1.0] [Acc:1.2] wasm.quota: [worker-4494654640] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span>SUMMARY🔥| TEST_EXECUTION | INFO  |  [G:0.4] [Acc:2.2] base.scene.runner:   [PASS] Time: 2.64ms | Output: UNAUTHORIZED_PROPOSER (Consensus Failed): Insufficient signers provided (1 &lt; 2)</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.eco: </span></span>
<span class="line"><span>--- Running Suite: Sybil Attack Defense (Duplicate Keys) ---</span></span>
<span class="line"><span>SUMMARY🔥| TEST_EXECUTION | INFO  |  [G:0.4] [Acc:2.3] base.scene.runner: </span></span>
<span class="line"><span>[TEST] AnchorStore: Reject Sybil Attack (Duplicate Signer) (Func: seal_epoch)</span></span>
<span class="line"><span>SUMMARY🔥| SYSTEM | INFO  |  [G:0.9] [Acc:1.4] wasm.quota: [worker-4494832848] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span>SUMMARY🔥| TEST_EXECUTION | INFO  |  [G:0.4] [Acc:2.5] base.scene.runner:   [PASS] Time: 1.11ms | Output: UNAUTHORIZED_PROPOSER (Consensus Failed): Duplicate signer detected: e1921144d1822ef99f986f03148d7517ae88418e86ae1d1857d818439a602bf4</span></span>
<span class="line"><span>SUMMARY🔥| TEST_EXECUTION | INFO  |  [G:1.0] [Acc:2.4] scene.eco: </span></span>
<span class="line"><span>--- Running Suite: Dynamic ACL Filtering ---</span></span>
<span class="line"><span>SUMMARY🔥| TEST_EXECUTION | INFO  |  [G:0.4] [Acc:2.6] base.scene.runner: </span></span>
<span class="line"><span>[TEST] AnchorStore: Reject Unauthorized Signer via ACL (Func: seal_epoch)</span></span>
<span class="line"><span>SUMMARY🔥| SYSTEM | INFO  |  [G:0.9] [Acc:1.5] wasm.quota: [worker-4494879504] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span>SUMMARY🔥| TEST_EXECUTION | INFO  |  [G:0.4] [Acc:2.7] base.scene.runner:   [PASS] Time: 1.89ms | Output: UNAUTHORIZED_PROPOSER (Consensus Failed): Consensus Threshold not met: 1/2</span></span>
<span class="line"><span>SUMMARY🔥| TEST_EXECUTION | INFO  |  [G:0.9] [Acc:2.5] scene.eco: </span></span>
<span class="line"><span>=== [PHASE 3] Executing 5-Flow Complete Epoch Scenarios ===</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  infra.e2e.epoch: </span></span>
<span class="line"><span>=== [Lifecycle START] AI Agent Swarm Consensus (M-of-N) ===</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  infra.e2e.epoch: --- [Flow 1] Initialization: Requesting Parity Triplet ---</span></span>
<span class="line"><span>SUMMARY🔥| SYSTEM | INFO  |  [G:0.8] [Acc:1.6] wasm.quota: [worker-4494880112] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  infra.e2e.epoch:   └─ Generated Nexus ID: 83892227</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  infra.e2e.epoch: --- [Flow 1.5] Economy: AP2 Mandate Validation ---</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  infra.e2e.epoch: --- [Flow 2] Inscription: Gathering Local Node States ---</span></span>
<span class="line"><span>SUMMARY🔥| TEST_EXECUTION | INFO  |  [G:0.4] [Acc:2.7] base.scene.runner: </span></span>
<span class="line"><span>[TEST] Swarm: Inscribe CodeAgent (Func: inscribe_actor)</span></span>
<span class="line"><span>SUMMARY🔥| SYSTEM | INFO  |  [G:0.8] [Acc:1.7] wasm.quota: [worker-4494831888] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span>SUMMARY🔥| TEST_EXECUTION | INFO  |  [G:0.4] [Acc:2.8] base.scene.runner:   [PASS] Time: 1.12ms | Output: {&quot;commit_hash&quot;: &quot;9bbb18f666d301b986c8a6c2f20a00f1da2b9faaf810569378f3c684fbaead69&quot;, &quot;payload_json&quot;: &quot;{\\&quot;nexus_id\\&quot;:83892227,\\&quot;parent_commit_id\\&quot;:\\&quot;has</span></span>
<span class="line"><span>SUMMARY🔥| TEST_EXECUTION | INFO  |  [G:0.4] [Acc:2.9] base.scene.runner: </span></span>
<span class="line"><span>[TEST] Swarm: Inscribe SecurityAgent (Func: inscribe_actor)</span></span>
<span class="line"><span>SUMMARY🔥| TEST_EXECUTION | INFO  |  [G:0.4] [Acc:2.9] base.scene.runner:   [PASS] Time: 0.76ms | Output: {&quot;commit_hash&quot;: &quot;2c8078418e65e7e4f22cddbd9cccaa5755f8b099b281fdcb8c9cfc37b1291a3f&quot;, &quot;payload_json&quot;: &quot;{\\&quot;nexus_id\\&quot;:83892227,\\&quot;parent_commit_id\\&quot;:\\&quot;has</span></span>
<span class="line"><span>[Telemetry] Burst Alert Triggered on &#39;TEST_EXECUTION:base.scene.runner&#39; (Acc: 3.03) Den: 27.50)</span></span>
<span class="line"><span>SUMMARY🔥| TEST_EXECUTION | INFO  |  [G:0.1] [Acc:3.0] base.scene.runner: </span></span>
<span class="line"><span>[TEST] Swarm: Inscribe GovAgent (Func: inscribe_actor)</span></span>
<span class="line"><span>[Telemetry] System Stabilized on &#39;SYSTEM:wasm.quota&#39;</span></span>
<span class="line"><span>[Telemetry] Burst Alert Triggered on &#39;TEST_EXECUTION:base.scene.runner&#39; (Acc: 3.11) Den: 28.00)</span></span>
<span class="line"><span>[Telemetry] System Stabilized on &#39;TEST_EXECUTION:infra.e2e.epoch&#39;</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  infra.e2e.epoch: --- [Flow 2.5] Economy: Off-chain Capability Token Issuance / Metering ---</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  infra.e2e.epoch: --- [Flow 3] Sealing: Cryptographic Epoch Alignment ---</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  infra.e2e.epoch:   └─ Epoch Sealed Successfully via Multi-sig Consensus.</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  infra.e2e.epoch: --- [Flow 4] Transition: Validating &amp; Applying State Evolution ---</span></span>
<span class="line"><span>[Telemetry] Burst Alert Triggered on &#39;TEST_EXECUTION:base.scene.runner&#39; (Acc: 3.11) Den: 28.50)</span></span>
<span class="line"><span>[Telemetry] System Stabilized on &#39;SYSTEM:wasm.quota&#39;</span></span>
<span class="line"><span>[Telemetry] Burst Alert Triggered on &#39;TEST_EXECUTION:base.scene.runner&#39; (Acc: 3.18) Den: 29.00)</span></span>
<span class="line"><span>[Telemetry] System Stabilized on &#39;TEST_EXECUTION:infra.e2e.epoch&#39;</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  infra.e2e.epoch: --- [Flow 5] Finality: Zero-Trust Parity &amp; Recovery Verification ---</span></span>
<span class="line"><span>[Telemetry] Burst Alert Triggered on &#39;TEST_EXECUTION:base.scene.runner&#39; (Acc: 3.26) Den: 29.50)</span></span>
<span class="line"><span>[Telemetry] System Stabilized on &#39;SYSTEM:wasm.quota&#39;</span></span>
<span class="line"><span>[Telemetry] Burst Alert Triggered on &#39;TEST_EXECUTION:base.scene.runner&#39; (Acc: 3.33) Den: 30.00)</span></span>
<span class="line"><span>[Telemetry] System Stabilized on &#39;TEST_EXECUTION:infra.e2e.epoch&#39;</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  infra.e2e.epoch: </span></span>
<span class="line"><span>=== [Lifecycle START] Cross-Repo Provenance Alignment (M-of-N) ===</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  infra.e2e.epoch: --- [Flow 1] Initialization: Requesting Parity Triplet ---</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  infra.e2e.epoch:   └─ Generated Nexus ID: 2248153091</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  infra.e2e.epoch: --- [Flow 1.5] Economy: AP2 Mandate Validation ---</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  infra.e2e.epoch: --- [Flow 2] Inscription: Gathering Local Node States ---</span></span>
<span class="line"><span>[Telemetry] Burst Alert Triggered on &#39;TEST_EXECUTION:base.scene.runner&#39; (Acc: 3.33) Den: 30.50)</span></span>
<span class="line"><span>[Telemetry] System Stabilized on &#39;SYSTEM:wasm.quota&#39;</span></span>
<span class="line"><span>[Telemetry] Burst Alert Triggered on &#39;TEST_EXECUTION:base.scene.runner&#39; (Acc: 3.37) Den: 31.00)</span></span>
<span class="line"><span>[Telemetry] System Stabilized on &#39;SYSTEM:wasm.quota&#39;</span></span>
<span class="line"><span>[Telemetry] Burst Alert Triggered on &#39;TEST_EXECUTION:base.scene.runner&#39; (Acc: 3.56) Den: 32.00)</span></span>
<span class="line"><span>[Telemetry] System Stabilized on &#39;TEST_EXECUTION:infra.e2e.epoch&#39;</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  infra.e2e.epoch: --- [Flow 2.5] Economy: Off-chain Capability Token Issuance / Metering ---</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  infra.e2e.epoch: --- [Flow 3] Sealing: Cryptographic Epoch Alignment ---</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  infra.e2e.epoch:   └─ Epoch Sealed Successfully via Multi-sig Consensus.</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  infra.e2e.epoch: --- [Flow 4] Transition: Validating &amp; Applying State Evolution ---</span></span>
<span class="line"><span>[Telemetry] Burst Alert Triggered on &#39;TEST_EXECUTION:base.scene.runner&#39; (Acc: 3.64) Den: 32.50)</span></span>
<span class="line"><span>[Telemetry] System Stabilized on &#39;SYSTEM:wasm.quota&#39;</span></span>
<span class="line"><span>[Telemetry] Burst Alert Triggered on &#39;TEST_EXECUTION:base.scene.runner&#39; (Acc: 3.75) Den: 33.00)</span></span>
<span class="line"><span>[Telemetry] System Stabilized on &#39;TEST_EXECUTION:infra.e2e.epoch&#39;</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  infra.e2e.epoch: --- [Flow 5] Finality: Zero-Trust Parity &amp; Recovery Verification ---</span></span>
<span class="line"><span>[Telemetry] Burst Alert Triggered on &#39;TEST_EXECUTION:base.scene.runner&#39; (Acc: 3.86) Den: 33.50)</span></span>
<span class="line"><span>[Telemetry] System Stabilized on &#39;SYSTEM:wasm.quota&#39;</span></span>
<span class="line"><span>[Telemetry] Burst Alert Triggered on &#39;TEST_EXECUTION:base.scene.runner&#39; (Acc: 3.98) Den: 34.00)</span></span>
<span class="line"><span>[Telemetry] System Stabilized on &#39;TEST_EXECUTION:wasm.tester&#39;</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  wasm.tester: </span></span>
<span class="line"><span>&gt;&gt;&gt; [PHASE] Starting Test Suite: CERT &lt;&lt;&lt;</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.sandbox: </span></span>
<span class="line"><span>=======================================================</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.sandbox: [START] Master System Certification Pipeline</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.sandbox: =======================================================</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Telemetry] Burst Alert Triggered on &#39;TEST_EXECUTION:base.scene.runner&#39; (Acc: 4.20) Den: 35.00)</span></span>
<span class="line"><span>[Telemetry] System Stabilized on &#39;SYSTEM:daemon.taskwasm&#39;</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [b58c99aa] Global Cgroup default tier updated -&gt; SYSTEM</span></span>
<span class="line"><span>[Telemetry] Burst Alert Triggered on &#39;TEST_EXECUTION:base.scene.runner&#39; (Acc: 4.32) Den: 35.50)</span></span>
<span class="line"><span>[Telemetry] System Stabilized on &#39;TEST_EXECUTION:scene.sandbox&#39;</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.sandbox: </span></span>
<span class="line"><span>--- [Proof 1] Gas Boundary &amp; Memory Trap ---</span></span>
<span class="line"><span>[Telemetry] Burst Alert Triggered on &#39;TEST_EXECUTION:base.scene.runner&#39; (Acc: 4.43) Den: 36.00)</span></span>
<span class="line"><span>[Telemetry] System Stabilized on &#39;SYSTEM:daemon.taskwasm&#39;</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [6a17ab75] Global Cgroup default tier updated -&gt; STANDARD</span></span>
<span class="line"><span>[Telemetry] Burst Alert Triggered on &#39;TEST_EXECUTION:base.scene.runner&#39; (Acc: 4.55) Den: 36.50)</span></span>
<span class="line"><span>[Telemetry] System Stabilized on &#39;SYSTEM:wasm.quota&#39;</span></span>
<span class="line"><span>SUMMARY🔥| SYSTEM | INFO  |  [G:0.5] [Acc:2.8] wasm.quota: [worker-4494832848] enforced: Tier=STANDARD, Mem=64MB, Fuel=10,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [002f7a67] Entering Python Legacy Jail (Tier: STANDARD, Cached: True)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.python: [Deno RPC Request] -&gt; {&quot;jsonrpc&quot;: &quot;2.0&quot;, &quot;method&quot;: &quot;execute&quot;, &quot;params&quot;: {&quot;code&quot;: &quot;\\nstate_mock = []\\nwhile True:\\n    state_mock.append(&#39;A&#39; * 1024)\\n&quot;, &quot;context&quot;: {&quot;phase&quot;: &quot;TEST_EXECUTION&quot;, &quot;flow_id&quot;: &quot;111301127202557954&quot;, &quot;timestamp&quot;: 1793761877034, &quot;timeout&quot;: 5.0, &quot;seed&quot;: &quot;dphi_secure_fallback_seed&quot;}}, &quot;id&quot;: 4}</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [002f7a67] [Perf] (Cached) Wait: 10.23ms | Exec: 2341.92ms | Total: 2352.15ms</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [002f7a67] Sandbox Metrics: {&#39;mem_usage_bytes&#39;: 22042727, &#39;mem_peak_bytes&#39;: 22138470, &#39;fuel_consumed&#39;: 10000000, &#39;fuel_remaining&#39;: 0, &#39;tier&#39;: &#39;STANDARD&#39;, &#39;timing_ms&#39;: {&#39;wait&#39;:10.23, &#39;spawn&#39;: 0.0, &#39;exec&#39;: 2341.92}}</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 0.00ms | Output: Fuel/Memory Trap triggered successfully. Error: RuntimeError: [&#39;Quota Error: CPU Fuel Quota Exceeded (10000000)&#39;]</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner: </span></span>
<span class="line"><span>[Control Plane] Shifting WasmCgroup Policy Tier -&gt; SYSTEM</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [ecd61d2b] Global Cgroup default tier updated -&gt; SYSTEM</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   └─ Policy successfully enforced to SYSTEM.</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.sandbox: </span></span>
<span class="line"><span>--- [Proof 3] Floating-Point Determinism ---</span></span>
<span class="line"><span>SUMMARY🔥| SYSTEM | INFO  |  [G:0.6] [Acc:2.3] wasm.quota: [worker-4494879504] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000 (x3)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [worker-4494879504] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [d5ee1f3d] Entering Python Legacy Jail (Tier: SYSTEM, Cached: True)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.python: [Deno RPC Request] -&gt; {&quot;jsonrpc&quot;: &quot;2.0&quot;, &quot;method&quot;: &quot;execute&quot;, &quot;params&quot;: {&quot;code&quot;: &quot;\\nimport math\\n# \\ube44\\uc120\\ud615 \\uc5f0\\uc0b0 \\ud6c4 15\\uc790\\ub9ac \\uc815\\ubc00\\ub3c4\\ub85c \\ucd9c\\ub825\\nval = sum(math.sin(i * 0.1) * math.cos(i * 0.05) for i in range(1000))\\nprint(f\\&quot;{val:.15f}\\&quot;)\\n&quot;, &quot;context&quot;: {&quot;phase&quot;: &quot;TEST_EXECUTION&quot;, &quot;flow_id&quot;: &quot;111301127202557954&quot;, &quot;timestamp&quot;: 1793761879406, &quot;timeout&quot;: 5.0, &quot;seed&quot;: &quot;dphi_secure_fallback_seed&quot;}}, &quot;id&quot;: 4}</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [d5ee1f3d] [Perf] (Cached) Wait: 0.00ms | Exec: 10.16ms | Total: 10.16ms</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [d5ee1f3d] Sandbox Metrics: {&#39;mem_usage_bytes&#39;: 17224, &#39;mem_peak_bytes&#39;: 49905, &#39;fuel_consumed&#39;: 0, &#39;fuel_remaining&#39;: -1, &#39;tier&#39;: &#39;SYSTEM&#39;, &#39;timing_ms&#39;: {&#39;wait&#39;: 0.0, &#39;spawn&#39;:0.0, &#39;exec&#39;: 10.16}}</span></span>
<span class="line"><span>SUMMARY🔥| SYSTEM | INFO  |  [G:0.6] [Acc:2.4] wasm.quota: [worker-4494880112] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000 (x3)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [worker-4494880112] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [71872c02] Entering Python Legacy Jail (Tier: SYSTEM, Cached: True)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.python: [Deno RPC Request] -&gt; {&quot;jsonrpc&quot;: &quot;2.0&quot;, &quot;method&quot;: &quot;execute&quot;, &quot;params&quot;: {&quot;code&quot;: &quot;\\nimport math\\n# \\ube44\\uc120\\ud615 \\uc5f0\\uc0b0 \\ud6c4 15\\uc790\\ub9ac \\uc815\\ubc00\\ub3c4\\ub85c \\ucd9c\\ub825\\nval = sum(math.sin(i * 0.1) * math.cos(i * 0.05) for i in range(1000))\\nprint(f\\&quot;{val:.15f}\\&quot;)\\n&quot;, &quot;context&quot;: {&quot;phase&quot;: &quot;TEST_EXECUTION&quot;, &quot;flow_id&quot;: &quot;111301127202557954&quot;, &quot;timestamp&quot;: 1793761879432, &quot;timeout&quot;: 5.0, &quot;seed&quot;: &quot;dphi_secure_fallback_seed&quot;}}, &quot;id&quot;: 4}</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [71872c02] [Perf] (Cached) Wait: 0.01ms | Exec: 9.73ms | Total: 9.73ms</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [71872c02] Sandbox Metrics: {&#39;mem_usage_bytes&#39;: 17224, &#39;mem_peak_bytes&#39;: 49875, &#39;fuel_consumed&#39;: 0, &#39;fuel_remaining&#39;: -1, &#39;tier&#39;: &#39;SYSTEM&#39;, &#39;timing_ms&#39;: {&#39;wait&#39;: 0.01, &#39;spawn&#39;: 0.0, &#39;exec&#39;: 9.73}}</span></span>
<span class="line"><span>SUMMARY🔥| SYSTEM | INFO  |  [G:0.6] [Acc:2.5] wasm.quota: [worker-4494831888] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000 (x3)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [worker-4494831888] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [a6b26973] Entering Python Legacy Jail (Tier: SYSTEM, Cached: True)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.python: [Deno RPC Request] -&gt; {&quot;jsonrpc&quot;: &quot;2.0&quot;, &quot;method&quot;: &quot;execute&quot;, &quot;params&quot;: {&quot;code&quot;: &quot;\\nimport math\\n# \\ube44\\uc120\\ud615 \\uc5f0\\uc0b0 \\ud6c4 15\\uc790\\ub9ac \\uc815\\ubc00\\ub3c4\\ub85c \\ucd9c\\ub825\\nval = sum(math.sin(i * 0.1) * math.cos(i * 0.05) for i in range(1000))\\nprint(f\\&quot;{val:.15f}\\&quot;)\\n&quot;, &quot;context&quot;: {&quot;phase&quot;: &quot;TEST_EXECUTION&quot;, &quot;flow_id&quot;: &quot;111301127202557954&quot;, &quot;timestamp&quot;: 1793761879457, &quot;timeout&quot;: 5.0, &quot;seed&quot;: &quot;dphi_secure_fallback_seed&quot;}}, &quot;id&quot;: 4}</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [a6b26973] [Perf] (Cached) Wait: 1147.13ms | Exec: 8.89ms | Total: 1156.02ms</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [a6b26973] Sandbox Metrics: {&#39;mem_usage_bytes&#39;: 17200, &#39;mem_peak_bytes&#39;: 49851, &#39;fuel_consumed&#39;: 0, &#39;fuel_remaining&#39;: -1, &#39;tier&#39;: &#39;SYSTEM&#39;, &#39;timing_ms&#39;: {&#39;wait&#39;: 1147.13, &#39;spawn&#39;: 0.0, &#39;exec&#39;: 8.89}}</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 0.00ms | Output: Perfect Determinism achieved. Result: 1.595196469450608</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.sandbox: </span></span>
<span class="line"><span>--- [Proof 4] Byzantine Fault &amp; Quarantine ---</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner: </span></span>
<span class="line"><span>[TEST] Byzantine Defense: Quarantine rogue signature &amp; accept 2-of-3 threshold (Func: seal_epoch)</span></span>
<span class="line"><span>SUMMARY🔥| SYSTEM | INFO  |  [G:0.6] [Acc:2.7] wasm.quota: [worker-4494654640] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000 (x4)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [worker-4494654640] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 2.67ms | Output: {&quot;anchor_result&quot;: {&quot;commit_hash&quot;: &quot;f099fdc0738917003d8e6ed0cfaad3bb9e784cd82503b304494fa90204c36c8f&quot;, &quot;payload_json&quot;: &quot;{\\&quot;cached_states\\&quot;:{},\\&quot;parent_</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner: </span></span>
<span class="line"><span>=== [DONE] Scenarios Completed: 3 Passed, 0 Failed ===</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  wasm.tester: </span></span>
<span class="line"><span>&gt;&gt;&gt; [PHASE] Starting Test Suite: DYNAMICS &lt;&lt;&lt;</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.sandbox: </span></span>
<span class="line"><span>=======================================================</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.sandbox: [START] Field Dynamics &amp; Continuous Math Kernel Suite</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.sandbox: =======================================================</span></span>
<span class="line"><span></span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner: </span></span>
<span class="line"><span>[Control Plane] Shifting WasmCgroup Policy Tier -&gt; SYSTEM</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  daemon.taskwasm: [e360007c] Global Cgroup default tier updated -&gt; SYSTEM</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   └─ Policy successfully enforced to SYSTEM.</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.sandbox: </span></span>
<span class="line"><span>--- [Kernel] Kuramoto Oscillator Sync ---</span></span>
<span class="line"><span>SUMMARY🔥| SYSTEM | INFO  |  [G:0.6] [Acc:2.2] wasm.quota: [worker-4494832848] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000 (x3)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [worker-4494832848] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 0.00ms | Output: Kuramoto Math Verified. d_phase: 0.1000</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.sandbox: </span></span>
<span class="line"><span>--- [Kernel] FitzHugh-Nagumo Action Potential ---</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [worker-4494879504] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 0.00ms | Output: FHN Spiking logic and high tension (100.0) accurately triggered.</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.sandbox: </span></span>
<span class="line"><span>--- [Topology] Attractor / Reflector Bypass ---</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [worker-4494880112] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 0.00ms | Output: Attractor &amp; Reflector correctly bypassed O(N^2) interactions.</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  scene.sandbox: </span></span>
<span class="line"><span>--- [Guard] Dynamics Payload FFI Boundary ---</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [worker-4494831888] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 0.00ms | Output: Correctly trapped bad payload: Malformed JSON</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [worker-4494654640] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner:   [PASS] Time: 0.00ms | Output: Correctly trapped bad payload: Missing Type</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  base.scene.runner: </span></span>
<span class="line"><span>=== [DONE] Scenarios Completed: 5 Passed, 0 Failed ===</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  wasm.tester: </span></span>
<span class="line"><span>[SYSTEM] Generating Canonical Proof via Phase Kernel (phase.wasm)...</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [worker-4494832848] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | TEST_EXECUTION | INFO  |  wasm.tester: [AnchorStore] Test Execution Proof successfully sealed! Hash: 8ba8249ea78558d073908077f545f46cd221719522d5f22ac44024e599e598c8</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.tester: [SYSTEM] Tearing down Sandbox (Shutting down Supervisor)...</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  xphi.node.ops.task.supervisor: [Supervisor] Gracefully stopping 1 daemons concurrently...</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  infra.wasm.phase: </span></span>
<span class="line"><span>===========================================================================</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  infra.wasm.phase:                          PIPELINE EXECUTION REPORT                         </span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  infra.wasm.phase: ===========================================================================</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.entry: [SUCCESS] All Test Suites (sandbox, anchor, cert, dynamics) PASSED.</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.entry: Execution Canonical Hash: 8ba8249ea78558d073908077f545f46cd221719522d5f22ac44024e599e598c8</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  infra.wasm.phase: ===========================================================================</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Reactor] Lifecycle terminated cleanly.</span></span>
<span class="line"><span>SUMMARY🔥| TEST_EXECUTION | INFO  |  [G:0.1] [Acc:4.5] base.scene.runner: [base.scene.runner] Bursting logs suppressed... (x19)</span></span></code></pre></div>`,3)])])}const E=s(p,[["render",o]]);export{S as __pageData,E as default};
