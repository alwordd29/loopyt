<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
<script src="https://cdn.tailwindcss.com?plugins=typography,aspect-ratio"></script>
<link href="https://cdn.jsdelivr.net/npm/daisyui@2.46.1/dist/full.css" rel="stylesheet" type="text/css" />
<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&display=swap');
#ashade{
font-family: 'Kanit',sans-serif;
}
input:-webkit-autofill,
input:-webkit-autofill:focus {
  transition: background-color 600000s 0s, color 600000s 0s;
}
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
<article data-theme="fantasy" id="ashade" class="">
<input type="checkbox" id="live-modal-4" class="modal-toggle" />
<label for="live-modal-4" class="modal cursor-pointer w-full">
  <label class="modal-box w-11/12 max-w-5xl" for="">
    <article class="grid grid-cols-1">
        <div class="px-2 py-2 md:px-2" id="ifplayx"></div>
        <div id="infoplayx"></div>
    <h2 id="titlexh3" class="text-lg font-bold text-center"></h2>
    <p id="datama" class="py-4"></p>
    </article>
</label>
</label>
</article>
<script type="text/javascript">
async function pxpx(stdaya){
var datasPi = stdaya.split(",");
const yes = await fetch(`https://data.loopyt.com/wp-json/wp/v2/posts?categories=3&_embed&per_page=10&_fields=id,date_gmt,slug,title,content,_links`, {})
const dataAVX = await yes.json();
const fontPosts = dataAVX.filter((post) => { if (post?.title?.rendered?.includes(datasPi[1])) {return true;};});
let fontPostscx = 'ไม่พบข้อมูลทีมที่กำลังแข่งขัน แต่เรามี ทัศนะบอล วิเคราะห์บอล คู่แนะนำ<br>'+dataAVX[Math.floor(Math.random() * 10)].content.rendered;
if(fontPostscx){
   const fontPostscx = fontPosts?.content?.rendered;
};
jQuery("#titlexh3").html(`ทัศนะบอล วิเคราะห์บอล ${datasPi[1]} พบกับ ${datasPi[2]} วันที่ ${datasPi[4]} เวลา ${datasPi[5]}`);
jQuery("#datama").html(`<div class="prose max-w-none prose-img:rounded-xl prose-headings:underline prose-headings:text-yellow-500 text-center prose-a:text-red-600 prose-strong:text-green-500 prose-b:text-pink-500 prose-p:text-gray-600">${fontPostscx}</div>`);
jQuery("#ifplayx").html(`<iframe class="aspect-video w-full h-12/12 md:h-[550px]" src="https://live.dooball24hd.com/ดูบอล/?id=${datasPi[0]}" allowfullscreen></iframe>`)
jQuery('#datama > div > p:nth-child(2)').addClass('grid grid-cols-1 md:grid-cols-3 grid justify-items-center');
jQuery("#infoplayx").html(`<div class="col-span-2 grid grid-cols-3 gap-0">
<div class="grid grid-rows-2 text-center grid justify-items-center">
<img class="h-16 w-16" src="${datasPi[6]}" alt="${datasPi[1]}" onerror="this.src='https://www.loopyt.com/_next/image/?url=%2Fimages%2Fcasino%2FUFALOOPYT.png&w=1200&q=75'" />
<h3 class="grid content-center text-base"><strong>${datasPi[1]}</strong></h3></div>
<div class="text-center grid content-center"><p class="text-lg">ดูบอลสด</p>VS<p class="font-bold text-base">${datasPi[4]}</p><p>${datasPi[5]}</p></div>
<div class="grid grid-rows-2 text-center grid justify-items-center"><img class="h-16 w-16" src="${datasPi[7]}" alt="${datasPi[2]}" onerror="this.src='https://www.loopyt.com/_next/image/?url=%2Fimages%2Fcasino%2FUFALOOPYT.png&w=1200&q=75'" />
<h3 class="grid content-center text-base"><strong>${datasPi[2]}</strong></h3></div></div>`)};
(async function () {var items = []; const res = await fetch(`https://liveball.avfreex24.com/ballx`); const data = await res.json();
jQuery.each(data['AV_ITEMS'], function (key, val) { items.push(`<div class="brandname w-full p-4 mb-2 bg-black/50 rounded-lg"><h2 class="text-lg text-yellow-500"><strong>การแข่งขัน ${val['tournament']}</strong></h2> ${list_ball(val['fixtureData'])}</div>`); });
function list_ball(fixtureData) {var html = ''; jQuery.each(fixtureData, function (keyz, valz) {
var liveTime = valz['livetime']; if (liveTime == 1) { var liveTimeStatus = `<label class="livex glow-on-hover cursor-pointer" for="live-modal-4" class="btn" onclick="pxpx('${valz['id']},${valz['team1']},${valz['team2']},${valz['sport_type']},${valz['dateth']},${valz['time']},${valz['logoteam1']},${valz['logoteam2']}')" href="#" title="${valz['team1']} VS ${valz['team2']}" ><span class="p-2 bg-red-500 rounded-lg text-white">กำลังถ่ายทอดสด</span></label>`; } else { var liveTimeStatus = ""; };
html += `<div class="grid grid-cols-1 gap-0 md:grid-cols-3 py-2 text-white">
<div class="grid content-center"><p>${valz['dateth']}</p><p>เวลา <strong>${valz['time']}</strong></p><div class="p-2 mt-2">
${liveTimeStatus}</div></div><div class="col-span-2 grid grid-cols-3 gap-0"><div class="grid grid-rows-2 text-center grid justify-items-center"><img class="h-16 w-16" src="${valz['logoteam1']}" alt="${valz['team1']}" onerror="this.src='https://www.loopyt.com/_next/image/?url=%2Fimages%2Fcasino%2FUFALOOPYT.png&w=1200&q=75'" />
<h3 class="grid content-center text-base"><strong>${valz['team1']}</strong></h3></div><div class="text-center font-bold grid content-center">
VS</div><div class="grid grid-rows-2 text-center grid justify-items-center"><img class="h-16 w-16" src="${valz['logoteam2']}" alt="${valz['team2']}" onerror="this.src='https://www.loopyt.com/_next/image/?url=%2Fimages%2Fcasino%2FUFALOOPYT.png&w=1200&q=75'" />
<h3 class="grid content-center text-base"><strong>${valz['team2']}</strong></h3></div></div></div>`}); return html;} jQuery("<div/>", { "class": "w-full", html: items.join("") }).appendTo("#ashade");})();
</script>
