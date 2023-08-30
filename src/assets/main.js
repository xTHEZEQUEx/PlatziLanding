const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCFl7yKfcRcFmIUbKeCA-SJQ&part=snippet%2Cid&order=date&maxResults=10';
const urlPeep ='https://youtube-v31.p.rapidapi.com/search?channelId=UC0gOw4iy-6HwO01q-gA1B0Q&part=snippet%2Cid&order=date&maxResults=10'
const content = null || document.getElementById('content');
const contentTwo = null || document.getElementById('contentTwo');

const optionsPeep = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '52c5effaabmshc83ab6aa165c364p1751a4jsn0b6842ee43b6',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};
async function fetchPeep(urlApiPeep){
    const response = await fetch(urlApiPeep, optionsPeep)
    const data = await response.json();
    return data;
}
(async () =>{
    try {
        const videosPeep = await fetchPeep(urlPeep)
        let vista = `
        ${videosPeep.items.map(video =>`
        <a href="https://youtube.com/watch?v=${video.id.videoId}" target="_blank">
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-200 font-bold">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
                </h3>
            </div>
        </div>
        </a>
        `).slice(0,8).join('')}
      `;
      contentTwo.innerHTML = vista; 
    } catch (error) {
        console.log(error);
    }
})
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '52c5effaabmshc83ab6aa165c364p1751a4jsn0b6842ee43b6',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};
async function fetchData(urlApi){
    const response = await fetch(urlApi, options)
    const data = await response.json();
    return data;
}
(async () =>{
    try {
        const videos = await fetchData(url)
        let view = `
        ${videos.items.map(video =>`
        <a href="https://youtube.com/watch?v=${video.id.videoId}" target="_blank">
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-200 font-bold">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
                </h3>
            </div>
        </div>
        </a>
        `).slice(0,8).join('')}
      `;
      content.innerHTML = view; 
    } catch (error) {
        console.log(error);
    }
}) ();
