/*
  Wei Xu's academic website content.
  To update publications, talks or appointments, edit the arrays below.
  The main website is intentionally dependency-free and can be hosted by GitHub Pages.
*/
window.SITE_DATA = {
  source: "https://sites.google.com/view/xuwei-math/home",
  email: "xuwei.math@gmail.com",
  publications: [
    // Preprints: reverse chronological order, following the source homepage.
    {type:"preprint", year:2026, authors:"Hao Wu and Wei Xu", title:"Uniform Local Asymptotics for Lévy Processes with Subexponential Jumps", arxiv:"2608.11637", tags:["Lévy processes","Large deviations"]},
    {type:"preprint", year:2026, authors:"Paul P. Hager, Ulrich Horst, Thomas Wagenhofer and Wei Xu", title:"Microstructural Foundation of Rough Log-Normal Volatility Models", arxiv:"2603.13170", tags:["Hawkes processes","Rough volatility"]},
    {type:"preprint", year:2025, authors:"Zhi-Hao Cui, Hao Wu and Wei Xu", title:"Large Excursions of Reflected Lévy Processes: Asymptotic Shapes", arxiv:"2512.08171", tags:["Lévy processes","Excursion theory"]},
    {type:"preprint", year:2024, authors:"Wei Xu", title:"Scaling Limit Theorems for Multivariate Hawkes Processes and Stochastic Volterra Equations with Measure Kernel", arxiv:"2412.14459", tags:["Hawkes processes","Volterra equations"]},
    {type:"preprint", year:2024, authors:"Wei Xu", title:"Stochastic Volterra Equations for Local Times of Spectrally Positive Lévy Processes with Gaussian Components", arxiv:"2411.15485", tags:["Lévy processes","Local times","Volterra equations"]},
    {type:"preprint", year:2023, authors:"Ulrich Horst, Wei Xu and Rouyi Zhang", title:"Convergence of Heavy-Tailed Hawkes Processes and the Microstructure of Rough Volatility", arxiv:"2312.08784", tags:["Hawkes processes","Rough volatility"]},

    // Refereed journal articles.
    {type:"journal", year:2026, authors:"Ulrich Horst, Wei Xu and Rouyi Zhang", title:"Path-dependent Fractional Volterra Equations and the Microstructure of Rough Volatility Models Driven by Poisson Random Measures", venue:"Finance and Stochastics · to appear", arxiv:"2412.16436", tags:["Volterra equations","Rough volatility"]},
    {type:"journal", year:2026, authors:"Grégoire Szymanski and Wei Xu", title:"Mean-Field Limits for Nearly Unstable Hawkes Processes", venue:"Electronic Journal of Probability, 31, 1–31", arxiv:"2501.11648", tags:["Hawkes processes","Mean-field limits"]},
    {type:"journal", year:2026, authors:"Ulrich Horst and Wei Xu", title:"Functional Limit Theorems for Hawkes Processes", venue:"Probability Theory and Related Fields, 194, 917–996", arxiv:"2401.11495", doi:"10.1007/s00440-024-01348-3", tags:["Hawkes processes"]},
    {type:"journal", year:2025, authors:"Ulrich Horst and Wei Xu", title:"Second-Order Regular Variation and Second-Order Approximation of Hawkes Processes", venue:"Journal of Mathematical Analysis and Applications, 550(2)", arxiv:"2311.02655", doi:"10.1016/j.jmaa.2025.129546", tags:["Hawkes processes","Regular variation"]},
    {type:"journal", year:2024, authors:"Wei Xu", title:"Stochastic Volterra Equations for the Local Times of Spectrally Positive Stable Processes", venue:"Annals of Applied Probability, 34(3), 2733–2798", arxiv:"2105.02349", tags:["Lévy processes","Local times","Volterra equations"]},
    {type:"journal", year:2024, authors:"Wei Xu", title:"Diffusion Approximations for Marked Self-Excited Systems with Applications to General Branching Processes", venue:"Annals of Applied Probability, 34(3), 2650–2713", arxiv:"2101.01288", tags:["Branching processes","Hawkes processes"]},
    {type:"journal", year:2023, authors:"Wei Xu", title:"Asymptotics for Exponential Functionals of Random Walks", venue:"Stochastic Processes and their Applications, 165, 1–42", arxiv:"2201.02975", doi:"10.1016/j.spa.2023.07.013", tags:["Random walks","Exponential functionals"], errata:["Page 5, last line: replace P̂_x by P_x.", "Page 6, line 10: interchange the definitions of the two transition functions.", "Page 12, Remark 3.1: the claims remain valid when τ₀⁻ > n, τ₀⁺ > n, V(x), and V̂(x) are replaced respectively by Lₙ > 0, Mₙ < 0, V(x−), and V̂(x−)."]},
    {type:"journal", year:2022, authors:"Ulrich Horst and Wei Xu", title:"The Microstructure of Stochastic Volatility Models with Self-Exciting Jump Dynamics", venue:"Annals of Applied Probability, 32(6), 4568–4610", arxiv:"1911.12969", doi:"10.1214/22-AAP1796", tags:["Hawkes processes","Rough volatility"]},
    {type:"journal", year:2021, authors:"Wei Xu", title:"Asymptotic Results for Heavy-Tailed Lévy Processes and Their Exponential Functionals", venue:"Bernoulli, 27(4), 2766–2803", arxiv:"1912.04795", tags:["Lévy processes","Exponential functionals"]},
    {type:"journal", year:2021, authors:"Ulrich Horst and Wei Xu", title:"Functional Limit Theorems for Marked Hawkes Point Measures", venue:"Stochastic Processes and their Applications, 134, 94–131", arxiv:"1908.06703", doi:"10.1016/j.spa.2020.12.002", tags:["Hawkes processes"]},
    {type:"journal", year:2019, authors:"Ulrich Horst and Wei Xu", title:"A Scaling Limit for Limit Order Books Driven by Hawkes Processes", venue:"SIAM Journal on Financial Mathematics, 10(2), 350–393", arxiv:"1709.01292", doi:"10.1137/17M1148682", tags:["Hawkes processes","Mathematical finance"]},
    {type:"journal", year:2018, authors:"Zenghu Li and Wei Xu", title:"Asymptotic Results for Exponential Functionals of Lévy Processes", venue:"Stochastic Processes and their Applications, 128, 108–131", arxiv:"1601.02363", doi:"10.1016/j.spa.2017.04.005", tags:["Lévy processes","Exponential functionals"]},
    {type:"journal", year:2018, authors:"Hui He, Zenghu Li and Wei Xu", title:"Continuous-State Branching Processes in Lévy Random Environments", venue:"Journal of Theoretical Probability, 31, 1–23", arxiv:"1601.04808", doi:"10.1007/s10959-017-0765-1", tags:["Branching processes","Lévy processes"]},
    {type:"journal", year:2016, authors:"Wei Xu", title:"Backward Doubly Stochastic Equations with Jumps and Comparison Theorems", venue:"Journal of Mathematical Analysis and Applications, 443(1), 596–624", arxiv:"1601.04237", doi:"10.1016/j.jmaa.2016.05.050", tags:["Stochastic equations"]},
    {type:"journal", year:2014, authors:"Wei Xu", title:"Parameter Estimation in Two-Type Continuous-State Branching Processes with Immigration", venue:"Statistics & Probability Letters, 91, 124–134", arxiv:"1303.5908", doi:"10.1016/j.spl.2014.04.021", tags:["Branching processes","Statistics"]},

    // Supplementary manuscripts listed on the original homepage.
    {type:"supplement", year:2021, authors:"Wei Xu", title:"Asymptotic Results for Rough Continuous-State Branching Processes", arxiv:"2107.05888", tags:["Branching processes"]},
    {type:"supplement", year:2013, authors:"Wei Xu", title:"Nonparametric Estimation in Continuous-State Branching Processes with Immigration", arxiv:"1310.4021", tags:["Branching processes","Statistics"]}
  ],
  education: [
    {dates:"2011 — 2016", enDegree:"Ph.D. in Mathematics", zhDegree:"数学博士", enSchool:"School of Mathematical Sciences, Beijing Normal University", zhSchool:"北京师范大学数学科学学院", location:"Beijing, China"},
    {dates:"2007 — 2011", enDegree:"B.S. in Mathematics", zhDegree:"数学学士", enSchool:"School of Mathematics, Jilin University", zhSchool:"吉林大学数学学院", location:"Changchun, China"}
  ],
  appointments: [
    {dates:"Current", enRole:"Tenure-track Associate Professor", zhRole:"预聘副教授", enOrg:"School of Mathematics and Statistics, Beijing Institute of Technology", zhOrg:"北京理工大学数学与统计学院", location:"Beijing, China"},
    {dates:"10/2020 — 06/2023", enRole:"Research Assistant", zhRole:"研究助理", enOrg:"Humboldt-Universität zu Berlin", zhOrg:"柏林洪堡大学", location:"Berlin, Germany"},
    {dates:"10/2018 — 09/2020", enRole:"Humboldt Research Fellowship", zhRole:"洪堡研究学者", enOrg:"Alexander von Humboldt Foundation", zhOrg:"德国洪堡基金会", location:"Germany"},
    {dates:"04/2017 — 09/2018", enRole:"Postdoctoral Researcher", zhRole:"博士后研究员", enOrg:"Humboldt-Universität zu Berlin", zhOrg:"柏林洪堡大学", location:"Berlin, Germany"},
    {dates:"01/2017 — 03/2017", enRole:"Visiting Scholar", zhRole:"访问学者", enOrg:"Concordia University", zhOrg:"康考迪亚大学", location:"Canada"},
    {dates:"07/2016 — 12/2016", enRole:"Research Assistant", zhRole:"研究助理", enOrg:"Beijing Normal University", zhOrg:"北京师范大学", location:"China"},
    {dates:"08/2014 — 09/2015", enRole:"Exchange Student", zhRole:"交换学生", enOrg:"Cornell University", zhOrg:"康奈尔大学", location:"USA"},
    {dates:"07/2013 — 08/2013", enRole:"Visiting Student", zhRole:"访问学生", enOrg:"Bielefeld University", zhOrg:"比勒费尔德大学", location:"Germany"},
    {dates:"09/2011 — 06/2014", enRole:"Teaching Assistant", zhRole:"助教", enOrg:"Beijing Normal University", zhOrg:"北京师范大学", location:"China"}
  ],
  talks: [
    {title:"Stochastic Volterra Equations for the Local Times of Spectrally Positive Stable Processes", events:["26/09/2023 · The 9th Workshop on Branching Processes and Related Topics, Yunnan, China", "17/10/2023 · Discrete Random Structures, Będlewo, Poland"]},
    {title:"From Hawkes Stochastic Systems to Stochastic Volatility Models", events:["21/03/2023 · Beijing Institute of Technology, Beijing, China", "06/09/2023 · Nankai University, Tianjin, China"]},
    {title:"Functional Limit Theorems for Quasi-Stationary Hawkes Processes", events:["07/12/2022 · Berlin Probability Colloquium, Berlin, Germany", "02/06/2023 · Workshop on Modelling with Hawkes Processes, Warsaw, Poland"]},
    {title:"Interplay of Hawkes Processes, General Branching Processes and Stable Local Time", events:["13/10/2021 · Jilin University, Changchun, China"]},
    {title:"A Ray–Knight Theorem for Spectrally Positive Stable Processes", events:["22/09/2021 · THU–PKU–BNU Joint Probability Webinar, Beijing, China", "27/09/2021 · German Probability & Statistics Days, Germany", "06/10/2021 · Fujian Normal University, Fuzhou, China", "01/05/2022 · From Birth–Death Processes and Brownian Motions to Superprocesses, Xi'an, China", "18/10/2022 · Seminario de Probabilidad para Estudiantes, Mexico"]},
    {title:"The Microstructure of Stochastic Volatility Models with Self-Exciting Jump Dynamics", events:["09/01/2020 · Vienna University of Technology, Vienna, Austria", "27/09/2021 · German Probability & Statistics Days, Germany", "05/06/2022 · Humboldt-Universität zu Berlin, Germany"]},
    {title:"Functional Limit Theorems for Marked Hawkes Point Measures", events:["08/07/2019 · International Mathematical Statistics China, Dalian, China", "23/09/2019 · Branching in Innsbruck, Innsbruck, Austria"]},
    {title:"Limit Order Books Driven by Infinite-Dimensional Hawkes Processes", events:["20/04/2017 · 3rd Berlin–Princeton–Singapore Workshop on Quantitative Finance, Berlin, Germany", "05/07/2017 · Workshop on BSDEs and SPDEs, Edinburgh, UK", "15/03/2018 · Concordia University, Montréal, Canada", "18/07/2018 · 10th World Congress of the Bachelier Finance Society, Dublin, Ireland"]},
    {title:"Exponential Functionals of Lévy Processes with Light/Heavy Tails", events:["02/02/2017 · Concordia University, Montréal, Canada", "26/08/2020 · Bernoulli–IMS One World Symposium, Online"]},
    {title:"Continuous-State Branching Processes in Random Environments and Stochastic Equations with Jumps", events:["01/05/2016 · Anhui Normal University, China", "23/06/2016 · Humboldt-Universität zu Berlin, Germany"]},
    {title:"Nonparametric / Parameter Estimation in Two-Type CBI Processes", events:["02/11/2013 · National Probability and Statistics Workshop for Young Scholars, Xuzhou, China", "05/07/2014 · Jilin University, China"]}
  ]
};
