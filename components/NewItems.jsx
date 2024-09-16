import NewItemsComponent from "./NewItemsComponent";
import NewItemsComponent1 from "./NewItemsComponent1";
import NewItemsComponent2 from "./NewItemsComponent2";

const NewItems = () => {
  return (
    <div className="overflow-hidden">
      <NewItemsComponent />
      <NewItemsComponent1 />
      {/* <NewItemsComponent2 /> */}
    </div>
  );
};

export default NewItems;
