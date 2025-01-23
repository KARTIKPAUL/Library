import TestimonialOne from "./TestimonialsOne"
import TestimonialsTwo from "./TestimonialsTwo";

const MainTestimonials = () => {
    return (
        <>
           <div className="flex flex-col space-y-10">
                <TestimonialOne />
                <TestimonialsTwo />
           </div>
        </>
    )
}
export default MainTestimonials;