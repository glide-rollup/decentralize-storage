const ListItem = () => {
  return (
    <div className={"flex flex-row justify-between border-b py-2.5 text-sm px-4 gap-2"}>
      <div className={"w-10"}>star</div>
      <div className={"flex-1"}>Name</div>
      <div className={"w-32"}>Size</div>
      <div className={"w-32"}>Version</div>
      <div className={"w-32"}>Date</div>
      <div className={"w-48 text-right"}>Actions</div>
    </div>
  );
};

export default ListItem;