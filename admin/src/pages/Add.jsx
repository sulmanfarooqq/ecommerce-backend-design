import React from "react";
import { assets } from "../assets/admin_assets/assets";
import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const categoryMap = {
  Men: ["Topwear", "Bottomwear", "Winterwear", "Footwear", "Accessories"],
  Women: ["Topwear", "Bottomwear", "Winterwear", "Footwear", "Accessories"],
  Kids: ["Topwear", "Bottomwear", "Winterwear", "Accessories"],
  "Bags & Footwear": ["Backpacks", "Handbags", "Sneakers", "Formal", "Boots"],
  "Jewelry & Watches": ["Necklaces", "Bracelets", "Rings", "Watches"],
  "Beauty & Fragrance": ["Skincare", "Makeup", "Haircare", "Perfume"],
  "Home & Lifestyle": ["Decor", "Bedding", "Kitchen", "Tech"],
};

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  // Reset subCategory when category changes
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setSubCategory(categoryMap[selectedCategory][0]);
  };

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice("");
        setSizes([]);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-3 bg-white p-6 rounded-xl shadow-sm border border-slate-100"
    >
      <div className="mb-4 w-full border-b pb-4">
        <h2 className="text-xl font-bold text-slate-800">Add New Product</h2>
        <p className="text-xs text-slate-500 mt-1 italic">Fill in the details to expand your collection.</p>
      </div>

      <div className="w-full">
        <p className="mb-2 text-sm font-semibold text-slate-700">Upload Product Images</p>
        <div className="flex gap-3">
          <label className="cursor-pointer group relative" htmlFor="image1">
            <img
              className="w-24 h-24 object-cover rounded-lg border-2 border-dashed border-slate-200 group-hover:border-[var(--brand)] transition-colors"
              src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
              alt="upload_area"
            />
            <input
              onChange={(e) => setImage1(e.target.files[0])}
              type="file"
              id="image1"
              hidden
            />
            {!image1 && <span className="absolute bottom-2 left-0 right-0 text-[10px] text-center text-slate-400">Front</span>}
          </label>
          <label className="cursor-pointer group relative" htmlFor="image2">
            <img
              className="w-24 h-24 object-cover rounded-lg border-2 border-dashed border-slate-200 group-hover:border-[var(--brand)] transition-colors"
              src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
              alt="upload_area"
            />
            <input
              onChange={(e) => setImage2(e.target.files[0])}
              type="file"
              id="image2"
              hidden
            />
            {!image2 && <span className="absolute bottom-2 left-0 right-0 text-[10px] text-center text-slate-400">Back</span>}
          </label>
          <label className="cursor-pointer group relative" htmlFor="image3">
            <img
              className="w-24 h-24 object-cover rounded-lg border-2 border-dashed border-slate-200 group-hover:border-[var(--brand)] transition-colors"
              src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
              alt="upload_area"
            />
            <input
              onChange={(e) => setImage3(e.target.files[0])}
              type="file"
              id="image3"
              hidden
            />
            {!image3 && <span className="absolute bottom-2 left-0 right-0 text-[10px] text-center text-slate-400">Side 1</span>}
          </label>
          <label className="cursor-pointer group relative" htmlFor="image4">
            <img
              className="w-24 h-24 object-cover rounded-lg border-2 border-dashed border-slate-200 group-hover:border-[var(--brand)] transition-colors"
              src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
              alt="upload_area"
            />
            <input
              onChange={(e) => setImage4(e.target.files[0])}
              type="file"
              id="image4"
              hidden
            />
            {!image4 && <span className="absolute bottom-2 left-0 right-0 text-[10px] text-center text-slate-400">Side 2</span>}
          </label>
        </div>
      </div>

      <div className="w-full mt-4">
        <p className="mb-2 text-sm font-semibold text-slate-700">Product Name</p>
        <input
          className="w-full max-w-[500px] px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-[var(--brand)]"
          type="text"
          placeholder="e.g., Premium Silk Wrap Dress"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
      </div>

      <div className="w-full">
        <p className="mb-2 text-sm font-semibold text-slate-700">Product Description</p>
        <textarea
          className="w-full max-w-[500px] px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-[var(--brand)] min-h-[100px]"
          placeholder="Write a compelling description for your customers..."
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          name="description"
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-[600px] mt-2">
        <div>
          <p className="mb-2 text-sm font-semibold text-slate-700">Category</p>
          <select
            onChange={handleCategoryChange}
            value={category}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-[var(--brand)] bg-slate-50 font-medium"
          >
            {Object.keys(categoryMap).map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold text-slate-700">Sub Category</p>
          <select
            onChange={(e) => setSubCategory(e.target.value)}
            value={subCategory}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-[var(--brand)] bg-slate-50 font-medium"
          >
            {categoryMap[category].map((sub) => (
              <option key={sub} value={sub}>{sub}</option>
            ))}
          </select>
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold text-slate-700">Price ($)</p>
          <input
            className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none focus:border-[var(--brand)] font-medium"
            type="Number"
            placeholder="99"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            required
          />
        </div>
      </div>
      <div className="w-full mt-4">
        <p className="mb-3 text-sm font-semibold text-slate-700">Available Sizes</p>
        <div className="flex flex-wrap gap-3">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <div
              key={size}
              onClick={() =>
                setSizes((prev) =>
                  prev.includes(size)
                    ? prev.filter((item) => item !== size)
                    : [...prev, size]
                )
              }
              className={`min-w-[48px] h-12 flex items-center justify-center rounded-lg cursor-pointer font-bold transition-all border-2 
                ${sizes.includes(size) 
                  ? "bg-[var(--brand)] text-white border-[var(--brand)] shadow-md translate-y-[-2px]" 
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"}`}
            >
              {size}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 mt-6 p-4 rounded-lg bg-slate-50 border border-slate-100 w-full max-w-[500px]">
        <input
          onChange={() => setBestseller((prev) => !prev)}
          checked={bestseller}
          type="checkbox"
          id="bestseller"
          className="h-5 w-5 rounded border-slate-300 text-[var(--brand)] focus:ring-[var(--brand)] cursor-pointer"
        />
        <label className="text-sm font-bold text-slate-700 cursor-pointer select-none" htmlFor="bestseller">
          Mark as Bestseller <span className="text-xs font-normal text-slate-500 ml-1">(Featured on Home Page)</span>
        </label>
      </div>

      <div className="flex w-full max-w-[500px] mt-8">
        <button 
          className="w-full py-4 rounded-xl bg-[#c586a5] text-black font-black uppercase tracking-widest shadow-lg shadow-[#c586a5]/20 transition-all hover:scale-[1.01] hover:shadow-xl active:scale-[0.99] border-none outline-none" 
          type="submit"
        >
          Publish Product
        </button>
      </div>
    </form>
  );
};

export default Add;
