const updateObjectInArray = (array: any, updateItem: any) => {
    console.log('arr', array);
    console.log('updateitem', updateItem);
    return array.map((item: any, index: number) => {
        if (index !== updateItem.index) {
            // This isn't the item we care about - keep it as-is
            return item;
        }

        // Otherwise, this is the one we want - return an updated value
        return {
            ...item,
            destination: `${updateItem.location.position.x}${
                updateItem.location.position.y
            } ${updateItem.location.orientation} ${
                updateItem.lost ? 'lost' : ''
            }`,
        };
    });
};

export default updateObjectInArray;
