import React from 'react'
import { useForm } from "react-hook-form";
import ButtonLleidahack from 'src/components/buttons/ButtonLleidahack';

const EventCreatorForm = () => {
const { register, handleSubmit, formState: { errors } } = useForm();

const onSubmit = data => {
    //here we are going to make a request to create the event. Firs we check localy if user is logged and then we send to server using userToken
    //At the moment, backend has problems, so this part would be done later :)
};

return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
                <label>Name Event</label>
                <input {...register("nameEvent", { required: true })} className='min-h-10 px-2 text-sm md:text-base' />
                {errors.nameEvent && <span className='text-red-600'>This field is required</span>}
            </div>
            <div>
                <label>Date Start Event</label>
                <input type="date" {...register("dateStartEvent", { required: true })} className='min-h-10 px-2 text-sm md:text-base'/>
                {errors.dateStartEvent && <span className='text-red-600'>This field is required</span>}
            </div>
            <div>
                <label>Date End Event</label>
                <input type="date" {...register("dateEndEvent", { required: true })} className='min-h-10 px-2 text-sm md:text-base'/>
                {errors.dateEndEvent && <span className='text-red-600'>This field is required</span>}
            </div>
            <div>
                <label>Min Participants</label>
                <input type="number" {...register("minParticipants", { required: true, min: 1 })} className='min-h-10 px-2 text-sm md:text-base'/>
                {errors.minParticipants && <span className='text-red-600'>Minimum 1 participant</span>}
            </div>
            <div>
                <label>Max Participants</label>
                <input type="number" {...register("maxParticipants", { required: true, min: 1 })} className='min-h-10 px-2 text-sm md:text-base'/>
                {errors.maxParticipants && <span className='text-red-600'>Minimum 1 participant</span>}
            </div>
            <div>
                <label>Min Sponsors</label>
                <input type="number" {...register("minSponsors", { required: true, min: 0 })} className='min-h-10 px-2 text-sm md:text-base'/>
                {errors.minSponsors && <span className='text-red-600'>Minimum 0 sponsors</span>}
            </div>
            <div>
                <label>Max Sponsors</label>
                <input type="number" {...register("maxSponsors", { required: true, min: 0 })} className='min-h-10 px-2 text-sm md:text-base'/>
                {errors.maxSponsors && <span className='text-red-600'>Minimum 0 sponsors</span>}
            </div>
            <div>
                <label>Price Event</label>
                <input type="number" step="0.01" {...register("priceEvent", { required: true, min: 0 })} className='min-h-10 px-2 text-sm md:text-base'/>
                {errors.priceEvent && <span className='text-red-600'>Minimum price is 0</span>}
            </div>
        </div>

        <div className='w-full flex flex-col justify-end items-end mt-4'>
        <ButtonLleidahack primary type="submit">Create Event</ButtonLleidahack>
        </div>
    </form>
)
}

export default EventCreatorForm