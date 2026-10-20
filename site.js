(() => {
  "use strict";
  const data = window.SITE_DATA;
  if (!data) return;
  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];
  const dict = {
    en: {
      navHome:"Home", navResearch:"Research", navPapers:"Publications", navAbout:"Academic path", navTalks:"Talks", navContact:"Contact",
      heroKicker:"PROBABILITY THEORY · STOCHASTIC ANALYSIS", heroGreeting:"Hello, I'm", heroRole:"Tenure-track Associate Professor",
      heroAffiliation:"School of Mathematics and Statistics<br>Beijing Institute of Technology", heroIntro:"I study probability and stochastic processes, with a focus on Lévy processes, stochastic Volterra equations, random fields and branching systems.",
      exploreWork:"Explore publications",getInTouch:"Get in touch",heroBottom:"QUESTIONS · STRUCTURES · RANDOMNESS",discover:"Discover more",
      researchKicker:"RESEARCH FOCUS", researchHeading:"Understanding randomness.",researchDeck:"From the geometry of jump processes to the dynamics of large interacting systems, my work explores the mathematical structure of stochastic phenomena.",
      area1Title:"Lévy processes & local times",area1Desc:"Fluctuation theory, excursions, exponential functionals and spatial properties of local time.",
      area2Title:"Stochastic Volterra equations",area2Desc:"Stochastic integral equations and their connections to self-exciting systems and scaling limits.",
      area3Title:"Branching & particle systems",area3Desc:"Branching processes, interacting particle systems and their probabilistic limits.",
      area4Title:"Random fields & stochastic flows",area4Desc:"Spatially indexed random phenomena and stochastic evolution across space and time.",
      papersKicker:"RESEARCH OUTPUT",papersHeading:"Publications.",papersDeck:"Research articles, preprints and supplementary manuscripts. Paper titles link directly to arXiv.",
      filterAll:"All papers",filterPreprints:"Preprints",filterJournals:"Journal articles",filterSupplements:"Other manuscripts",reverseChron:"NEWEST FIRST", searchPlaceholder:"Search titles, authors, topics…",searchAria:"Search publications",noResults:"No papers match this search.",clearFilters:"Clear filters",papersCount:n=>`${n} ${n===1?"paper":"papers"}`,type_preprint:"PREPRINT",type_journal:"JOURNAL",type_supplement:"OTHER MANUSCRIPT",journalLink:"Journal",errataHeading:"Corrections noted on the original homepage",paperNote:"Publication metadata is based on the source homepage. Please check arXiv or journal pages for the latest versions and publication status.",
      backgroundKicker:"ACADEMIC JOURNEY",backgroundHeading:"Academic path.",backgroundDeck:"Education, research appointments and international academic experience.",educationTitle:"Education",positionsTitle:"Appointments & visits",
      talksKicker:"SEMINARS & CONFERENCES",talksHeading:"Invited talks.",talksDeck:"A record of presentations at universities, seminars, workshops and international conferences, as listed on the original website.",talksHint:"Select a talk to view its venues and dates.",
      contactKicker:"LET'S CONNECT",contactHeading:"Questions, ideas, or<br>a new collaboration?",contactDeck:"For research questions, seminars, or potential collaborations, feel free to get in touch.",officeLabel:"OFFICE",affiliationLabel:"AFFILIATION",contactAffiliation:"School of Mathematics and Statistics<br>Beijing Institute of Technology",
      footerTag:"Mathematics, probability and stochastic processes.",originalSite:"Original website",backToTop:"Back to top ↑",footerCraft:"Built for GitHub Pages · No external dependencies"
    },
    zh: {
      navHome:"首页", navResearch:"研究方向", navPapers:"学术论文", navAbout:"学术经历", navTalks:"学术报告", navContact:"联系我",
      heroKicker:"概率论 · 随机分析",heroGreeting:"你好，我是",heroRole:"预聘副教授",heroAffiliation:"北京理工大学<br>数学与统计学院",heroIntro:"主要研究概率论与随机过程，关注 Lévy 过程及其局部时、随机 Volterra 方程、随机场与随机流，以及分支过程和相互作用粒子系统。",
      exploreWork:"浏览学术论文",getInTouch:"与我联系",heroBottom:"问题 · 结构 · 随机性",discover:"向下探索",
      researchKicker:"研究领域",researchHeading:"探索随机世界的结构.",researchDeck:"从跳过程的样本路径结构，到大规模相互作用系统的演化规律，研究随机现象背后的数学机制。",
      area1Title:"Lévy 过程与局部时",area1Desc:"波动理论、随机游动、游程（excursions）、指数泛函及局部时的空间结构。",
      area2Title:"随机 Volterra 方程",area2Desc:"随机积分方程，及其与自激系统、极限定理之间的联系。",
      area3Title:"分支过程与粒子系统",area3Desc:"连续状态分支过程、相互作用粒子系统及相关概率极限。",
      area4Title:"随机场与随机流",area4Desc:"空间指标随机现象以及随时间和空间演化的随机系统。",
      papersKicker:"研究成果",papersHeading:"学术论文.",papersDeck:"收录期刊论文、预印本与其他手稿，点击标题可直接打开对应的 arXiv 页面。",
      filterAll:"全部论文",filterPreprints:"预印本",filterJournals:"期刊论文",filterSupplements:"其他手稿",reverseChron:"按年份倒序",searchPlaceholder:"搜索论文标题、作者、研究主题…",searchAria:"搜索论文",noResults:"没有找到符合条件的论文。",clearFilters:"清除筛选",papersCount:n=>`共 ${n} 篇`,type_preprint:"预印本",type_journal:"期刊论文",type_supplement:"其他手稿",journalLink:"期刊页面",errataHeading:"原主页所列勘误",paperNote:"论文列表以原 Google Sites 主页为基础整理。论文最新版本与发表状态请以 arXiv 或期刊页面为准。",
      backgroundKicker:"学术履历",backgroundHeading:"学术经历.",backgroundDeck:"教育背景、研究任职和国际学术访问经历。",educationTitle:"教育背景",positionsTitle:"工作与访问经历",
      talksKicker:"讲座与会议",talksHeading:"学术报告.",talksDeck:"汇总原主页记录的高校讲座、研讨会及国际学术会议报告。",talksHint:"点击报告标题，展开查看报告时间与地点。",
      contactKicker:"保持联系",contactHeading:"交流问题、分享想法，<br>或开展学术合作？",contactDeck:"欢迎就研究问题、学术报告或潜在合作通过邮件联系。",officeLabel:"办公室",affiliationLabel:"工作单位",contactAffiliation:"北京理工大学<br>数学与统计学院",
      footerTag:"数学 · 概率论 · 随机过程",originalSite:"原始网站",backToTop:"返回顶部 ↑",footerCraft:"基于 GitHub Pages · 无第三方依赖"
    }
  };
  const htmlKeys = new Set(["heroAffiliation","contactHeading","contactAffiliation"]);
  const filterOrder = {preprint:0,journal:1,supplement:2};
  const sortedPapers = [...data.publications].sort((a,b)=>b.year-a.year || filterOrder[a.type]-filterOrder[b.type]);
  const pubList = $('#publications-list');
  let lang = "en";
  let activeFilter = "all";
  let search = "";
  try { if (localStorage.getItem('wei-xu-language') === 'zh') lang = 'zh'; } catch (_) {}

  function element(tag, className, value){
    const el=document.createElement(tag);
    if(className)el.className=className;
    if(value!==undefined)el.textContent=value;
    return el;
  }
  function externalLink(text,url,cls){
    const a=element('a',cls,text);
    a.href=url;a.target='_blank';a.rel='noopener noreferrer';
    return a;
  }
  function renderPapers(){
    if(!pubList)return;
    const t=dict[lang];
    const q=search.trim().normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
    const matches=sortedPapers.filter(p=>{
      if(activeFilter!=='all' && p.type!==activeFilter)return false;
      const haystack=[p.title,p.authors,p.venue,p.year,...(p.tags||[])].join(' ').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
      return !q||haystack.includes(q);
    });
    const frag=document.createDocumentFragment();
    for(const p of matches){
      const item=element('article','publication');
      item.append(element('div','pub-year',String(p.year)));
      const main=element('div','pub-main');
      const line=element('div','pub-topline');
      line.append(element('span','pub-kind',t['type_'+p.type]));
      if(p.tags&&p.tags.length)line.append(element('span','pub-tags','· '+p.tags.join(' · ')));
      main.append(line);
      const h=element('h3','pub-title');
      h.append(externalLink(p.title,`https://arxiv.org/abs/${encodeURIComponent(p.arxiv)}`));
      main.append(h,element('p','pub-authors',p.authors));
      if(p.venue)main.append(element('p','pub-venue',p.venue));
      if(p.errata&&p.errata.length){
        const correction=element('details','pub-errata');
        correction.append(element('summary','',t.errataHeading));
        const ol=element('ol');p.errata.forEach(line=>ol.append(element('li','',line)));
        correction.append(ol);main.append(correction);
      }
      item.append(main);
      const links=element('div','pub-links');
      links.append(externalLink('arXiv ↗',`https://arxiv.org/abs/${encodeURIComponent(p.arxiv)}`,'pub-link'));
      if(p.doi)links.append(externalLink(t.journalLink+' ↗',`https://doi.org/${p.doi}`,'pub-link'));
      item.append(links);frag.append(item);
    }
    pubList.replaceChildren(frag);
    $('#results-count').textContent=t.papersCount(matches.length);
    $('#no-results').hidden=matches.length>0;
  }
  function renderTimelines(){
    const edu=$('#education-list'), appointments=$('#appointments-list');
    const entry=(item,role,org)=>{
      const node=element('article','timeline-item');
      node.append(element('div','time',item.dates==='Current'?(lang==='zh'?'至今':'Current'):item.dates));
      node.append(element('h4','',role));
      node.append(element('p','',org));
      node.append(element('span','location',item.location));
      return node;
    };
    edu.replaceChildren(...data.education.map(item=>entry(item,lang==='zh'?item.zhDegree:item.enDegree,lang==='zh'?item.zhSchool:item.enSchool)));
    appointments.replaceChildren(...data.appointments.map(item=>entry(item,lang==='zh'?item.zhRole:item.enRole,lang==='zh'?item.zhOrg:item.enOrg)));
  }
  function renderTalks(){
    const container=$('#talks-list');
    // Keep the same open talks when language changes.
    const openIndices=$$('.talk-item').flatMap((el,i)=>el.open?[i]:[]);
    const frag=document.createDocumentFragment();
    data.talks.forEach((talk,i)=>{
      const details=element('details','talk-item');
      if(openIndices.includes(i))details.open=true;
      const summary=element('summary');
      const num=element('span','talk-number',String(i+1).padStart(2,'0'));
      const title=element('span','talk-title',talk.title);
      const plus=element('span','talk-expand','+');plus.setAttribute('aria-hidden','true');
      summary.append(num,title,plus);details.append(summary);
      const events=element('ul','talk-events');
      talk.events.forEach(ev=>events.append(element('li','',ev)));
      details.append(events);frag.append(details);
    });
    container.replaceChildren(frag);
  }
  function setLanguage(next){
    lang=next;
    const t=dict[lang];
    document.documentElement.lang=lang==='zh'?'zh-CN':'en';
    $$('[data-i18n]').forEach(el=>{
      const key=el.dataset.i18n;
      if(typeof t[key]!=='string')return;
      if(htmlKeys.has(key))el.innerHTML=t[key];
      else if (el.querySelector('.section-dot')) { el.replaceChildren(document.createTextNode(t[key].replace(/\.$/,'')), element('span','section-dot','.')); }
      else el.textContent=t[key];
    });
    $('#lang-label').textContent=lang==='en'?'中文':'EN';
    $('#lang-toggle').setAttribute('aria-label',lang==='en'?'Switch to Chinese':'切换为英文');
    $('#paper-search').placeholder=t.searchPlaceholder;
    $('#paper-search').setAttribute('aria-label',t.searchAria);
    document.title=lang==='zh'?'徐伟 | 数学与概率论':'Wei Xu — Mathematics & Probability';
    renderPapers();renderTimelines();renderTalks();
    try{localStorage.setItem('wei-xu-language',lang);}catch(_){}
  }
  $$('#publication-tabs button').forEach(btn=>{
    btn.addEventListener('click',()=>{
      activeFilter=btn.dataset.filter;
      $$('#publication-tabs button').forEach(b=>{
        const on=b===btn;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));
      });
      renderPapers();
    });
  });
  $('#paper-search').addEventListener('input',ev=>{search=ev.target.value;renderPapers();});
  $('#clear-search').addEventListener('click',()=>{
    activeFilter='all';search='';$('#paper-search').value='';
    $$('#publication-tabs button').forEach(b=>{const on=b.dataset.filter==='all';b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));});
    renderPapers();$('#paper-search').focus();
  });
  $('#lang-toggle').addEventListener('click',()=>setLanguage(lang==='en'?'zh':'en'));
  const menu=$('#primary-nav'),menuToggle=$('#menu-toggle');
  function closeMenu(){menu.classList.remove('open');document.body.classList.remove('menu-open');menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Open navigation menu');}
  menuToggle.addEventListener('click',()=>{
    const shouldOpen=!menu.classList.contains('open');
    menu.classList.toggle('open',shouldOpen);document.body.classList.toggle('menu-open',shouldOpen);
    menuToggle.setAttribute('aria-expanded',String(shouldOpen));
    menuToggle.setAttribute('aria-label',shouldOpen?'Close navigation menu':'Open navigation menu');
  });
  $$('#primary-nav a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.classList.contains('open'))closeMenu();});
  window.addEventListener('resize',()=>{if(window.innerWidth>840&&menu.classList.contains('open'))closeMenu();});
  if('IntersectionObserver' in window){
    const navLinks=$$('#primary-nav a[href^="#"]');
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          navLinks.forEach(link=>{const active=link.getAttribute('href')==='#'+entry.target.id;link.classList.toggle('active',active);if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});
        }
      });
    },{rootMargin:'-20% 0px -65% 0px',threshold:0});
    $$('main section[id]').forEach(section=>observer.observe(section));
  }
  $('#copyright-year').textContent=String(new Date().getFullYear());
  setLanguage(lang);
})();
