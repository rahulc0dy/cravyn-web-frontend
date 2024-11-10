import { useState } from "react";
import FileInput from "./FileInput";
import Link from "next/link";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";

const FoodItemForm = ({
  foodName = "",
  foodDescription = "",
  foodPrice = "",
  foodType = "",
  foodImage = null,
  onSubmit,
}) => {
  const [itemName, setItemName] = useState(foodName);
  const [description, setDescription] = useState(foodDescription);
  const [price, setPrice] = useState(foodPrice);
  const [itemType, setItemType] = useState(foodType);
  const [image, setImage] = useState(foodImage);
  const [imagePreview, setImagePreview] = useState(null); // URL for image preview

  const { data, mutate, isSuccess, isError, isPending, error } = useMutation({
    mutationFn: (formData) => onSubmit(formData),
    onSuccess: () => {
      alert("Successfully added food item.");
    },
    onError: (error) => {},
  });

  // Handle image selection and preview URL
  const handleImageChange = (file) => {
    setImage(file);
    setImagePreview(file ? URL.createObjectURL(file) : null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemName || !description || !price || !image) {
      alert("Please fill all fields.");
      return;
    }

    // Submit form data through React Query
    mutate({
      name: itemName,
      description,
      type: itemType,
      price,
      discountPercent: null,
      discountCap: null,
      foodImage: image,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" grid my-10 grid-rows-[1fr_auto] m-5 lg:mx-auto p-8 border-2 border-secondary-blue rounded-lg self-start"
    >
      <div className="grid md:grid-cols-[1.5fr_3fr] gap-8 md:my-8">
        <div className="flex flex-col items-center gap-2">
          <div className="w-full aspect-square rounded-md bg-red-100 flex items-center justify-center text-gray-500">
            {imagePreview ? (
              <Image
                src={imagePreview}
                width={200}
                height={200}
                className="w-full h-full object-cover border-2"
                alt="image preview"
              />
            ) : (
              "Image 500 X 500 pixels"
            )}
          </div>
          <FileInput
            classes={" w-full text-gray-600 border-2 border-grey-light-3"}
            htmlId="food-image"
            onUpload={handleImageChange}
            fileType="image"
            required={true}
          />
          {!image && (
            <span className="text-red-500">*Please select an image</span>
          )}
          <p className="mt-2 text-xs text-gray-500 text-center">
            Please mind that the image should be a true representation of the
            actual food item and must comply with FSSAI policies.
          </p>
        </div>

        <div className="grid grid-rows-[auto_auto_auto] gap-4 items-start">
          <div className="flex flex-col md:flex-row md:items-center">
            <label className="md:w-1/4 text-grey-dark-3 text-lg font-semibold mr-5">
              Item Name:
            </label>
            <input
              type="text"
              placeholder="Enter Item Name"
              name="itemName"
              className="w-full placeholder-grey-dark-3 bg-gray-50 px-3 py-2 border-2 border-grey-light-3 rounded-md invalid:border-primary-red valid:border-secondary-green placeholder-shown:invalid:border-grey-light-3  focus:outline-none"
              required
              minLength={3}
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center">
            <label
              htmlFor="item-type"
              className="md:w-1/4 text-grey-dark-3 text-lg font-semibold mr-5"
            >
              Item Type:
            </label>
            <div className="flex gap-8 w-full flex-wrap">
              <label className="flex items-center  font-medium text-md cursor-pointer">
                <input
                  type="radio"
                  name="item-type"
                  value="Vegetarian"
                  className="hidden peer"
                  checked={itemType === "Vegetarian"}
                  onChange={(e) => setItemType(e.target.value)}
                  required
                />
                <span className="peer-checked:text-emerald-700 peer-checked:font-bold peer-checked:bg-emerald-200 p-2 rounded-md transition-all">
                  <Image
                    alt="veg"
                    src="/assets/icons/vegetarian.png"
                    width={160}
                    height={160}
                    className=" inline-block h-4 w-auto mr-2"
                  />
                  Vegetarian
                </span>
              </label>
              <label className="flex items-center font-medium text-md cursor-pointer">
                <input
                  type="radio"
                  name="item-type"
                  value="Non-Vegetarian"
                  className="hidden peer"
                  checked={itemType === "Non-Vegetarian"}
                  onChange={(e) => setItemType(e.target.value)}
                  required
                />
                <span className="peer-checked:text-red-700 peer-checked:font-bold peer-checked:bg-rose-200 p-2 rounded-md transition-all">
                  <Image
                    alt="non-veg"
                    src="/assets/icons/non-vegetarian.png"
                    width={160}
                    height={160}
                    className=" inline-block h-4 w-auto mr-2"
                  />
                  Non-Vegetarian
                </span>
              </label>
              <label className="flex items-center font-medium text-md cursor-pointer">
                <input
                  type="radio"
                  name="item-type"
                  value="Beverages"
                  className="hidden peer"
                  checked={itemType === "Beverages"}
                  onChange={(e) => setItemType(e.target.value)}
                  required
                />
                <span className="peer-checked:text-cyan-700 peer-checked:font-bold peer-checked:bg-cyan-200 p-2 rounded-md transition-all">
                  <Image
                    alt="beverage"
                    src="/assets/icons/beverage.png"
                    width={160}
                    height={160}
                    className=" inline-block h-4 w-auto mr-2"
                  />
                  Beverage
                </span>
              </label>
            </div>
          </div>

          <div>
            <p className="text-grey-dark-3 text-lg mb-4 font-semibold">
              Description:
            </p>
            <textarea
              placeholder="Enter Description"
              className="bg-gray-50 placeholder-grey-dark-3 w-full px-3 py-2 border-2 border-grey-light-3 rounded-md resize-none invalid:border-primary-red valid:border-secondary-green placeholder-shown:invalid:border-grey-light-3 placeholder-shown:valid:border-grey-light-3 focus:outline-none"
              rows="6"
              minLength={10}
              maxLength={300}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center">
            <label className="md:w-1/4 text-grey-dark-3 text-lg font-semibold mr-5">
              Item Price:
            </label>
            <div className="flex w-full">
              <span className=" text-2xl text-green-900 font-bold rounded-l-md border-t-2 border-l-2 border-b-2 border-grey-light-3 bg-green-100 px-4 py-1">
                ₹
              </span>
              <input
                type="number"
                inputMode="numeric"
                placeholder="Enter Item Price"
                className="w-full placeholder-grey-dark-3 md:pl-6 px-3 py-2 border-2 border-grey-light-3 rounded-r-md invalid:border-primary-red valid:border-secondary-green placeholder-shown:invalid:border-grey-light-3 focus:outline-none"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col md:flex-row justify-between gap-3 py-3 md:py-0">
        <input
          type="submit"
          value={isPending ? "Pending" : "Add Item to Catalog"}
          className="md:w-2/3 px-6 py-2 bg-primary-green text-white font-semibold rounded-md hover:bg-emerald-600 cursor-pointer"
        />
        <Link
          href="/restaurants/catalog"
          className="font-semibold md:w-1/3 px-6 py-2 bg-danger-red text-white rounded-md hover:bg-primary-red text-center"
        >
          Cancel
        </Link>
      </div>
      {isError && <p className="font-semibold text-red-500">{error.message}</p>}
    </form>
  );
};

export default FoodItemForm;
