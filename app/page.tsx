import Image from 'next/image'
import Hero from '@/components/Hero';
import { fetchCars } from '@/utils';
import SearchBar from '@/components/SearchBar';
import CustomFilter from '@/components/CustomFilter';
import CarCard from '@/components/CarCard';
import { fuels, yearsOfProduction } from '@/constants';
import ShowMore from '@/components/ShowMore';



export default async function Home({searchParams}) {
 const allCars =await fetchCars({
  manufacturer: searchParams.manufacturer || "",
  year: searchParams.year || 2022,
  fuel: searchParams.fuel || "",
  limit: searchParams.limit || 10,
  model: searchParams.model || "",
 });
 const isDataEmpty =!Array.isArray(allCars) || allCars.length < 1 || allCars;
    console.log( allCars)
  return (
    <main className="overflow-hidden">
   <Hero />
   <div className='mt-12 padding-x padding-y
                  max-width' id='dicover'>

        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>
                
          </h1>
               <p>  Explore the cars you might like </p>
        </div>

        <div className='home__filters'>
          <SearchBar 
          
          />

          <div
          className='home__filter-container'>
            <CustomFilter title="fuel" options={fuels}/>
            <CustomFilter title="year" options={yearsOfProduction} />

          </div>
         
        </div>
        {isDataEmpty ?(
          <section >
          
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            <ShowMore  
            
            pageNumber={(searchParams.limit || 10) / 10}
            isNext={(searchParams.limit || 10) > allCars.length}
          
            
            />
           
          </section>
        ):(
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}

   </div>
   
    </main>
  )
}
{/*
 const allCars =await fetchCars();
  console.log(allCars)
  const isDataEmpty =!Array.isArray(allCars) || allCars.length <1 || allCars ;

  <Hero />
      <div>
        {!isDataEmpty ? (
          <section>
         {allCars?.map((car) => (<CarCard car ={car}/>
         ))}
          </section>
        ): 
        (
          <div>
            <h2>no result</h2>
            <p>{allCars?.message}</p>
          </div>
        )
        }
      </div>
*/}