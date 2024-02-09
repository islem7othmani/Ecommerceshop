import winter from '../Images/winter.jpg'
import summer from '../Images/summer.jpg'

function Gallery() {
    return(
        <>
<div className="mt-20">

    <div>
        <h1 className="font-bold text-3xl pb-4 flex justify-center mb-6">OUR COLLECTION</h1>
    </div>

    <div className='flex justify-center gap-x-6 drop-shadow-xl mb-20'>
<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={summer} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Legendary Anime Heroes Collection</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Each t-shirt in this collection features a stunning artwork of a legendary hero, meticulously designed to capture their essence and spirit. </p>
    </div>
</a>



<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={winter} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Legendary Anime Heroes Collection</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Each t-shirt in this collection features a stunning artwork of a legendary hero, meticulously designed to capture their essence and spirit. </p>
    </div>
</a>
</div>
</div>
        </>
    )
}
export default Gallery