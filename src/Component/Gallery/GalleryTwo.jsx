const GalleryTwo = () => {
  return (
    <>
      <div ClassName="grid lg:grid-flow-row grid-flow-col grid-rows-2 grid-cols-3 gap-8">
        <div>
          <img src="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" loading="lazy" />
        </div>
        <div ClassName="col-start-3">
          <img src="https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" loading="lazy" />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" loading="lazy" />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/913215/pexels-photo-913215.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" loading="lazy" />
        </div>
        <div ClassName="row-start-1 col-start-2 col-span-2">
          <img src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" loading="lazy" />
        </div>
      </div>
    </>
  );
};
export default GalleryTwo