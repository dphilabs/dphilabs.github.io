import{_ as n,o as s,c as e,ag as p}from"./chunks/framework.DlQ8ZhpE.js";const _=JSON.parse('{"title":"tester.20261027.log","description":"","frontmatter":{},"headers":[],"relativePath":"dev/abc/log/fsm/tester.20261027.log.md","filePath":"dev/abc/log/fsm/tester.20261027.log.md"}'),t={name:"dev/abc/log/fsm/tester.20261027.log.md"};function l(i,a,r,c,o,d){return s(),e("div",null,[...a[0]||(a[0]=[p(`<h1 id="tester-20261027-log" tabindex="-1">tester.20261027.log <a class="header-anchor" href="#tester-20261027-log" aria-label="Permalink to &quot;tester.20261027.log&quot;">​</a></h1><blockquote><p><strong>Raw Audit Log:</strong> <a href="/dev/abc/log/fsm/tester.20261027.log" target="_blank" rel="noopener"><code>/dev/abc/log/fsm/tester.20261027.log</code></a></p></blockquote><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>(self) wittgena@wittgenas-MacBook-Pro self % python -m dev.e2e.fsm.tester</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  contract.path: [PathRegistry] Synced 27 aliases.</span></span>
<span class="line"><span>[TunnelFactory] Provisioned Sync Tunnel: redis://localhost:6379/0</span></span>
<span class="line"><span>======================================================================================</span></span>
<span class="line"><span> [FIBER FSM/DAG MULTIVERSE TESTER] Starting E2E Lifecycle Verification</span></span>
<span class="line"><span>======================================================================================</span></span>
<span class="line"><span> LOG | KERNEL | INFO  |  anchor.store: [Ledger] Lock held by another node. Operating as PROPOSER (Read-Only/Proposer).</span></span>
<span class="line"><span> LOG | ANCHOR | INFO  |  anchor.oracle: [AnchorOracle] Mounted Anchor DB via PhaseStore. Canonical WASM Broker attached.</span></span>
<span class="line"><span> LOG | KERNEL | INFO  |  adapter.pta: [Crypto] Node identity loaded. PubKey: b77bda9b...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>--------------------------------------------------------------------------------------</span></span>
<span class="line"><span> [Phase 1: Compile] Stripping heavy Task I/O into CAS &amp; projecting &lt;=2KB Topology Blob</span></span>
<span class="line"><span>--------------------------------------------------------------------------------------</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: ⚙️ [AOT Compile] Compiling fsm.wasm (Only once per process)...</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: ✅ [AOT Compile] fsm.wasm cached successfully.</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [fsm-vm-worker-4504099136] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [fsm.wasm] Routing FSM_COMPILE on &#39;test_suite_01&#39; (Fuel Limit: 2000)</span></span>
<span class="line"><span>  • Root Graph Hash : branch:d454ee23192e6be8 (On-Ledger Compact IR)</span></span>
<span class="line"><span>  • Root Graph Size : 780B / 2048B Limit (38.1% used)</span></span>
<span class="line"><span>  • Offloaded Blobs : 5 CAS objects (4 TaskIOSpecs + 1 Branch Blob)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [fsm-vm-worker-4497659920] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [fsm.wasm] Routing FSM_COMPILE on &#39;bad_deadlock_check&#39; (Fuel Limit: 2000)</span></span>
<span class="line"><span>  • Static Linter   : Verified pre-mount deadlock rejection ([FSM Static Sandbox Rejected] E_BARRIER_DEADLOCK_RISK: Parallel bran...)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>--------------------------------------------------------------------------------------</span></span>
<span class="line"><span> [Phase 2: Initial Run &amp; HITL Park] Genesis(1000 Fuel) -&gt; Plan(-20) -&gt; 1:2 Fork[490, 490]</span></span>
<span class="line"><span>--------------------------------------------------------------------------------------</span></span>
<span class="line"><span>[TunnelFactory] Provisioned Async Tunnel: redis://localhost:6379/0</span></span>
<span class="line"><span> LOG | KERNEL | INFO  |  adapter.pta: [PtaAdapter:770D70] Tx Sealed. Receipt: 9edd5584... | Hash: c52d2417</span></span>
<span class="line"><span>  [Actuator] LLM Node &#39;Plan_Intent_LLM&#39; (target=&#39;gpt-4o&#39;) on &#39;run_101&#39; | Tick=1 | Spending 20 Fuel (1000 -&gt; 980) | Offloading response to CAS</span></span>
<span class="line"><span> LOG | KERNEL | INFO  |  adapter.pta: [PtaAdapter:770D70] Tx Sealed. Receipt: 709f0e32... | Hash: c420e31b</span></span>
<span class="line"><span>  [Actuator] 🛠️  Safe MCP Node &#39;Fast_Readonly_MCP&#39; (target=&#39;readonly_db_search&#39;) on &#39;run_101/b0&#39; | Tick=2 | Spending 5 Fuel (490 -&gt; 485) | Score=0.70</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [fsm-vm-worker-4497662800] enforced: Tier=STANDARD, Mem=64MB, Fuel=10,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [fsm.wasm] Routing FSM_STEP on &#39;branch:d454ee23192e6be8&#39; (Fuel Limit: 490)</span></span>
<span class="line"><span> LOG | KERNEL | INFO  |  adapter.pta: [PtaAdapter:770D70] Tx Sealed. Receipt: 3582a032... | Hash: 57c93ef6</span></span>
<span class="line"><span>  [Actuator] MCP Pre-Flight HITL Trap (HTTP 202) at &#39;Admin_Mutation_MCP&#39; (target=&#39;prod_db_admin&#39;) on &#39;run_101/b1&#39;! Regex matched &#39;DELETE&#39;. Parking cursor WITHOUT spending PTA (c420e31b..:1) or Fuel (490).</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  [Phase 2 Summary: Multiverse Paused Safely]</span></span>
<span class="line"><span>  • Detected Join Nodes : [&#39;Evaluate_And_Join&#39;, &#39;Final_Act&#39;]</span></span>
<span class="line"><span>  • Visited Trace       : run_101:Plan_Intent_LLM -&gt; run_101/b0:Fast_Readonly_MCP(FORK) -&gt; run_101/b1:Admin_Mutation_MCP(FORK) -&gt; run_101/b0:Evaluate_And_Join -&gt; run_101/b1:Admin_Mutation_MCP(HITL_PARKED)</span></span>
<span class="line"><span>  • Parked Cursors      : [&#39;run_101/b1&#39;, &#39;run_101/b0&#39;]</span></span>
<span class="line"><span>  • Branch b0 (Sibling) : Node=&#39;Evaluate_And_Join&#39; (Waiting at Join Barrier) | PTA=57c93ef6..:0 | Fuel=485 (490 - 5) | Tick=3</span></span>
<span class="line"><span>  • Branch b1 (Locked)  : Node=&#39;Admin_Mutation_MCP&#39; (Zero-Spend HITL Parked)  | PTA=c420e31b..:1 | Fuel=490 (490 - 0) | Tick=2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>--------------------------------------------------------------------------------------</span></span>
<span class="line"><span> [Phase 3: HITL Approval &amp; Mid-Flow Resume] O(1) Restore from PTA Pointers (Skipping Prior Nodes)</span></span>
<span class="line"><span>--------------------------------------------------------------------------------------</span></span>
<span class="line"><span>  • O(1) Rehydrated b1  : stream=&#39;run_101/b1&#39; at node=&#39;Admin_Mutation_MCP&#39; | PTA=c420e31b..:1 | Preserved Tick=2 | Preserved Fuel=490</span></span>
<span class="line"><span>  • Admin Action        : Approved TOTP/Slack Ticket &#39;hitl_ticket_drop_99&#39;. Resuming branches...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  [Actuator] MCP HITL Approved (&#39;hitl_ticket_drop_99&#39;)! Executing &#39;Admin_Mutation_MCP&#39; on &#39;run_101/b1&#39; | Tick=2 | Spending 15 Fuel (490 -&gt; 475) | Score=0.95</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [fsm-vm-worker-4497568304] enforced: Tier=STANDARD, Mem=64MB, Fuel=10,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [fsm.wasm] Routing FSM_STEP on &#39;branch:d454ee23192e6be8&#39; (Fuel Limit: 490)</span></span>
<span class="line"><span> LOG | KERNEL | INFO  |  adapter.pta: [PtaAdapter:770D70] Tx Sealed. Receipt: e391474b... | Hash: 515b6290</span></span>
<span class="line"><span> LOG | KERNEL | INFO  |  adapter.pta: [PtaAdapter:770D70] Tx Sealed. Receipt: eeb9d08f... | Hash: 152f910c</span></span>
<span class="line"><span>  [Actuator] Control Node &#39;Evaluate_And_Join&#39; (router) on &#39;run_101&#39; | Tick=4 | Cost=0 Fuel (Remaining=960)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [fsm-vm-worker-4497568912] enforced: Tier=STANDARD, Mem=64MB, Fuel=10,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [fsm.wasm] Routing FSM_STEP on &#39;branch:d454ee23192e6be8&#39; (Fuel Limit: 960)</span></span>
<span class="line"><span> LOG | KERNEL | INFO  |  adapter.pta: [PtaAdapter:770D70] Tx Sealed. Receipt: 301fda73... | Hash: ff9dd980</span></span>
<span class="line"><span>  [Actuator] Control Node &#39;Final_Act&#39; (act) on &#39;run_101&#39; | Tick=5 | Cost=0 Fuel (Remaining=960)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [fsm-vm-worker-4462435440] enforced: Tier=STANDARD, Mem=64MB, Fuel=10,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [fsm.wasm] Routing FSM_STEP on &#39;branch:d454ee23192e6be8&#39; (Fuel Limit: 960)</span></span>
<span class="line"><span> LOG | KERNEL | INFO  |  adapter.pta: [PtaAdapter:770D70] Tx Sealed. Receipt: d814a936... | Hash: 822aa0d7</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  [Phase 3 Summary: Diamond Barrier Merged &amp; Fuel Reclaimed]</span></span>
<span class="line"><span>  • Resumed Trace       : run_101/b0:Evaluate_And_Join(RESUMED) -&gt; run_101/b1:Admin_Mutation_MCP(RESUMED) -&gt; run_101/b1:Evaluate_And_Join -&gt; run_101:Evaluate_And_Join(MERGED) -&gt; run_101:Final_Act -&gt; run_101:END</span></span>
<span class="line"><span>  • Arbiter Winner      : Selected b1 (_score=0.95 &gt; b0 _score=0.70) at &#39;Evaluate_And_Join&#39;</span></span>
<span class="line"><span>  • Final Node          : END | Join Collapses: 1 | Final PTA=822aa0d7..:0</span></span>
<span class="line"><span>  • Reclaimed Fuel      : 960 (485 from b0 + 475 from b1 = 960 Total Conserved)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>--------------------------------------------------------------------------------------</span></span>
<span class="line"><span> [Phase 4: Time-Travel Re-Branching] Forking 2 New Hypotheses from Completed Checkpoint (960 Fuel)</span></span>
<span class="line"><span>--------------------------------------------------------------------------------------</span></span>
<span class="line"><span> LOG | KERNEL | INFO  |  adapter.pta: [PtaAdapter:770D70] Tx Sealed. Receipt: 9717ebb4... | Hash: fc0cc8f2</span></span>
<span class="line"><span>  • Forked 2 Experimental Branches from Sealed PTA 822aa0d7..:0 (960 Fuel -&gt; [480, 480]):</span></span>
<span class="line"><span>    - run_101/b0: Target=&#39;Reflect_Fallback_LLM&#39; | PTA=fc0cc8f2..:0 | Fuel=480 | Override=&#39;fallback_reflect&#39; (_score=0.99)</span></span>
<span class="line"><span>    - run_101/b1: Target=&#39;Final_Act&#39; | PTA=fc0cc8f2..:1 | Fuel=480 | Override=&#39;direct_exit&#39; (_score=0.5)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  [Actuator] LLM Node &#39;Reflect_Fallback_LLM&#39; (target=&#39;gpt-4o-mini&#39;) on &#39;run_101/b0&#39; | Tick=7 | Spending 20 Fuel (480 -&gt; 460) | Offloading response to CAS</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [fsm-vm-worker-4503825920] enforced: Tier=STANDARD, Mem=64MB, Fuel=10,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [fsm.wasm] Routing FSM_STEP on &#39;branch:d454ee23192e6be8&#39; (Fuel Limit: 480)</span></span>
<span class="line"><span> LOG | KERNEL | INFO  |  adapter.pta: [PtaAdapter:770D70] Tx Sealed. Receipt: ffaea7aa... | Hash: 31b13a10</span></span>
<span class="line"><span> LOG | KERNEL | INFO  |  adapter.pta: [PtaAdapter:770D70] Tx Sealed. Receipt: 1bce6547... | Hash: 1eed818e</span></span>
<span class="line"><span>  [Actuator] Control Node &#39;Final_Act&#39; (act) on &#39;run_101_exp&#39; | Tick=9 | Cost=0 Fuel (Remaining=940)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [fsm-vm-worker-4503825920] enforced: Tier=STANDARD, Mem=64MB, Fuel=10,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [fsm.wasm] Routing FSM_STEP on &#39;branch:d454ee23192e6be8&#39; (Fuel Limit: 940)</span></span>
<span class="line"><span> LOG | KERNEL | INFO  |  adapter.pta: [PtaAdapter:770D70] Tx Sealed. Receipt: 9ae510ea... | Hash: 8074bced</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  [Phase 4 Summary: Time-Travel Hypotheses Converged]</span></span>
<span class="line"><span>  • Time-Travel Trace   : run_101/b0:Reflect_Fallback_LLM(RESUMED) -&gt; run_101/b1:Final_Act(RESUMED) -&gt; run_101/b0:Final_Act -&gt; run_101_exp:Final_Act(MERGED) -&gt; run_101_exp:END</span></span>
<span class="line"><span>  • Final Exp State     : Stream=&#39;run_101_exp&#39; | Node=&#39;END&#39; | Reclaimed Fuel=940 (460 from b0 + 480 from b1 = 940)</span></span>
<span class="line"><span>  • Winning Strategy    : &#39;fallback_reflect&#39; (_score=0.99)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>--------------------------------------------------------------------------------------</span></span>
<span class="line"><span> [Phase 5: WASM Auto-Linker &amp; Runaway Catch Recovery] &gt;2KB Partitioning &amp; Fault Isolation</span></span>
<span class="line"><span>--------------------------------------------------------------------------------------</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [fsm-vm-worker-4504390224] enforced: Tier=SYSTEM, Mem=256MB, Fuel=2,000,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [fsm.wasm] Routing FSM_COMPILE on &#39;oversized_45&#39; (Fuel Limit: 2000)</span></span>
<span class="line"><span>  • &gt;2KB Auto-Linker    : 45-Node ASL partitioned into 5 sub-branches (Root=952B &lt;= 2048B)</span></span>
<span class="line"><span> LOG | KERNEL | INFO  |  adapter.pta: [PtaAdapter:770D70] Tx Sealed. Receipt: b30e0b7b... | Hash: 72c05a02</span></span>
<span class="line"><span>  [Actuator] LLM Node &#39;Plan_Intent_LLM&#39; (target=&#39;gpt-4o&#39;) on &#39;run_102_fault&#39; | Tick=1 | Spending 20 Fuel (1000 -&gt; 980) | Offloading response to CAS</span></span>
<span class="line"><span> LOG | KERNEL | INFO  |  adapter.pta: [PtaAdapter:770D70] Tx Sealed. Receipt: 410e0c7f... | Hash: 82d66633</span></span>
<span class="line"><span>  [Actuator] 💥 Runaway Fault Injected at &#39;Fast_Readonly_MCP&#39; (target=&#39;readonly_db_search&#39;) on &#39;run_102_fault/b0&#39;! Attempting to spend 990 Fuel (Available=490) -&gt; Triggering Catch Fallback</span></span>
<span class="line"><span> LOG | MULTIVERSE_TRAVERSER | WARN  |  fsm.traverser: [Traverser:run_102_fault/b0] Node &#39;Fast_Readonly_MCP&#39; faulted ([Runtime:run_102_fault/b0] Exhausted fuel (490 &lt; 990)); routing via Catch fallback -&gt; &#39;Evaluate_And_Join&#39;</span></span>
<span class="line"><span> LOG | KERNEL | INFO  |  adapter.pta: [PtaAdapter:770D70] Tx Sealed. Receipt: e1d68a90... | Hash: b7e70158</span></span>
<span class="line"><span>  [Actuator] MCP HITL Approved (&#39;hitl_ticket_drop_99&#39;)! Executing &#39;Admin_Mutation_MCP&#39; on &#39;run_102_fault/b1&#39; | Tick=2 | Spending 15 Fuel (490 -&gt; 475) | Score=0.95</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [fsm-vm-worker-4497357904] enforced: Tier=STANDARD, Mem=64MB, Fuel=10,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [fsm.wasm] Routing FSM_STEP on &#39;branch:d454ee23192e6be8&#39; (Fuel Limit: 490)</span></span>
<span class="line"><span> LOG | KERNEL | INFO  |  adapter.pta: [PtaAdapter:770D70] Tx Sealed. Receipt: f48ef4de... | Hash: 84b93115</span></span>
<span class="line"><span> LOG | KERNEL | INFO  |  adapter.pta: [PtaAdapter:770D70] Tx Sealed. Receipt: 861c3455... | Hash: 653e551b</span></span>
<span class="line"><span>  [Actuator] Control Node &#39;Evaluate_And_Join&#39; (router) on &#39;run_102_fault&#39; | Tick=4 | Cost=0 Fuel (Remaining=475)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [fsm-vm-worker-4497469952] enforced: Tier=STANDARD, Mem=64MB, Fuel=10,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [fsm.wasm] Routing FSM_STEP on &#39;branch:d454ee23192e6be8&#39; (Fuel Limit: 475)</span></span>
<span class="line"><span> LOG | KERNEL | INFO  |  adapter.pta: [PtaAdapter:770D70] Tx Sealed. Receipt: 5333f6c6... | Hash: e817e50b</span></span>
<span class="line"><span>  [Actuator] Control Node &#39;Final_Act&#39; (act) on &#39;run_102_fault&#39; | Tick=5 | Cost=0 Fuel (Remaining=475)</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  wasm.quota: [fsm-vm-worker-4497469952] enforced: Tier=STANDARD, Mem=64MB, Fuel=10,000,000</span></span>
<span class="line"><span> LOG | SYSTEM | INFO  |  inter.fsm: [fsm.wasm] Routing FSM_STEP on &#39;branch:d454ee23192e6be8&#39; (Fuel Limit: 475)</span></span>
<span class="line"><span> LOG | KERNEL | INFO  |  adapter.pta: [PtaAdapter:770D70] Tx Sealed. Receipt: 0a81bed3... | Hash: 13eee372</span></span>
<span class="line"><span>  • Fault Recovery Trace: run_102_fault:Plan_Intent_LLM -&gt; run_102_fault/b0:Fast_Readonly_MCP(FORK) -&gt; run_102_fault/b1:Admin_Mutation_MCP(FORK) -&gt; run_102_fault/b0:Evaluate_And_Join(FALLBACK) -&gt; run_102_fault/b1:Evaluate_And_Join -&gt; run_102_fault:Evaluate_And_Join(MERGED) -&gt; run_102_fault:Final_Act -&gt; run_102_fault:END</span></span>
<span class="line"><span>  • Fault Isolation     : Runaway b0 drained to 0 Fuel via Catch; Surviving b1 (475 Fuel) won merge -&gt; Reclaimed=475 Fuel</span></span>
<span class="line"><span></span></span>
<span class="line"><span>======================================================================================</span></span>
<span class="line"><span> ✅ ALL MULTIVERSE FSM/DAG, WASM AUTO-LINKER &amp; PTA LEDGER ASSERTIONS PASSED</span></span>
<span class="line"><span>======================================================================================</span></span></code></pre></div>`,3)])])}const m=n(t,[["render",l]]);export{_ as __pageData,m as default};
