import { useEffect, useState } from "react";

const BankDetails = () => {
  const [formData, setFormData] = useState({
    accountHolderName: "",
    accountNumber: "",
    ifscCode: "",
    bankName: "",
    bankCity: "",
    branchName: "",
    relationWithHolder: "",
    consent: false,
  });

  const [updated, setUpdated] = useState({
    updated: false,
    date: "",
  });

  const handleOnChange = (e) => {
    setFormData((prevFormData) => {
      const { name, value, type, checked } = e.target;
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
    console.log(formData);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    const options = { month: "short", day: "numeric", year: "numeric" };
    const formattedDate = date
      .toLocaleDateString("en-US", options)
      .toUpperCase()
      .replace(",", ", ");
    setUpdated({ updated: true, date: formattedDate });
    localStorage.setItem("formData", JSON.stringify(formData));
    localStorage.setItem(
      "updated",
      JSON.stringify({ updated: true, date: formattedDate })
    );
  };

  useEffect(() => {
    setUpdated(JSON.parse(localStorage.getItem("updated")) || {});
    setFormData(JSON.parse(localStorage.getItem("formData")) || {});
  }, []);

  return (
    <div className="p-6 flex flex-col gap-y-4 md:w-10/12 w-full">
      <h1 className="text-3xl font-medium">Update Bank Details</h1>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia,
        nostrum saepe ut ab soluta eum tempora maiores vitae doloribus deleniti
        id adipisci nam. Sapiente, animi. Eum nemo delectus quas rem?
      </p>
      <form
        onSubmit={handleOnSubmit}
        className="border-2 border-gray-400 flex flex-col items-center p-6 rounded-md gap-y-4"
      >
        <div className="flex md:flex-row flex-col justify-between md:items-center w-full font-semibold gap-y-3">
          <label className="px-2" htmlFor="accountHolderName">
            ACCOUNT HOLDER NAME
          </label>
          <input
            required
            onChange={handleOnChange}
            value={formData.accountHolderName}
            type="text"
            name="accountHolderName"
            id="accountHolderName"
            disabled={updated.updated}
            className={` ${
              updated.updated ? "bg-[#f1f7f5]" : ""
            } border-2 md:w-[50%] w-full p-2 rounded-md`}
            placeholder="Account Holder Name"
          />
        </div>
        <div className="flex md:flex-row flex-col justify-between md:items-center w-full font-semibold gap-y-3">
          <label className="px-2" htmlFor="accountNumber">
            ACCOUNT NUMBER
          </label>
          <input
            required
            type="text"
            onChange={handleOnChange}
            value={formData.accountNumber}
            name="accountNumber"
            id="accountNumber"
            disabled={updated.updated}
            className={` ${
              updated.updated ? "bg-[#f1f7f5]" : ""
            } border-2 md:w-[50%] w-full p-2 rounded-md`}
            placeholder="Account Number"
          />
        </div>
        <div className="flex md:flex-row flex-col justify-between md:items-center w-full font-semibold gap-y-3">
          <label className="px-2" htmlFor="ifscCode">
            IFSC CODE
          </label>
          <input
            required
            onChange={handleOnChange}
            value={formData.ifscCode}
            type="text"
            name="ifscCode"
            id="ifscCode"
            disabled={updated.updated}
            className={` ${
              updated.updated ? "bg-[#f1f7f5]" : ""
            } border-2 md:w-[50%] w-full p-2 rounded-md`}
            placeholder="IFSC Code"
          />
        </div>
        <div className="flex md:flex-row flex-col justify-between md:items-center w-full font-semibold gap-y-3">
          <label className="px-2" htmlFor="bankName">
            BANK NAME
          </label>
          <input
            onChange={handleOnChange}
            value={formData.bankName}
            required
            type="text"
            name="bankName"
            id="bankName"
            disabled={updated.updated}
            className={` ${
              updated.updated ? "bg-[#f1f7f5]" : ""
            } border-2 md:w-[50%] w-full p-2 rounded-md`}
            placeholder="Bank Name"
          />
        </div>
        <div className="flex md:flex-row flex-col justify-between md:items-center w-full font-semibold gap-y-3">
          <label className="px-2" htmlFor="bankCity">
            BANK CITY
          </label>
          <input
            onChange={handleOnChange}
            value={formData.bankCity}
            required
            type="text"
            name="bankCity"
            id="bankCity"
            disabled={updated.updated}
            className={` ${
              updated.updated ? "bg-[#f1f7f5]" : ""
            } border-2 md:w-[50%] w-full p-2 rounded-md`}
            placeholder="Bank City"
          />
        </div>
        <div className="flex md:flex-row flex-col justify-between md:items-center w-full font-semibold gap-y-3">
          <label className="px-2" htmlFor="branchName">
            BRANCH NAME
          </label>
          <input
            onChange={handleOnChange}
            required
            value={formData.branchName}
            type="text"
            name="branchName"
            id="branchName"
            disabled={updated.updated}
            className={` ${
              updated.updated ? "bg-[#f1f7f5]" : ""
            } border-2 md:w-[50%] w-full p-2 rounded-md`}
            placeholder="Branch Name"
          />
        </div>
        <div className="flex md:flex-row flex-col justify-between md:items-center w-full font-semibold gap-y-3">
          <label className="px-2" htmlFor="relationWithHolder">
            RELATION WITH ACCOUNT HOLDER
          </label>
          <input
            onChange={handleOnChange}
            required
            value={formData.relationWithHolder}
            type="text"
            name="relationWithHolder"
            id="relationWithHolder"
            disabled={updated.updated}
            className={` ${
              updated.updated ? "bg-[#f1f7f5]" : ""
            } border-2 md:w-[50%] w-full p-2 rounded-md`}
            placeholder="Relation With Account Holder"
          />
        </div>
        <div className="flex md:flex-row flex-col justify-between md:items-center w-full font-semibold gap-y-3">
          <label className="px-2" htmlFor="consent">
            CONSENT
          </label>
          <div
            className={`${
              updated.updated ? "bg-[#f1f7f5]" : ""
            } text-start border-2 md:w-[50%] w-full p-2 rounded-md flex justify-start gap-x-2`}
          >
            <input
              onChange={handleOnChange}
              required
              checked={formData.consent}
              type="checkbox"
              name="consent"
              id="consent"
              disabled={updated.updated}
              className="self-start mt-4"
              placeholder="Relation With Account Holder"
            />
            <div>
              <span className="text-sm text-gray-600 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                suscipit repellat quibusdam beatae ab itaque. Fugit sapiente ut,
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                suscipit repellate ab itaque. Fugit
              </span>
              {updated.updated && (
                <p className="font-bold">FILLED ON {updated.date} </p>
              )}
            </div>
          </div>
        </div>
        {!updated.updated && (
          <button
            type="submit"
            className="bg-[#3aa078] px-6 py-3 text-white font-medium rounded-sm self-end"
          >
            Save
          </button>
        )}
      </form>
      <p className="text-center font-medium text-gray-500 text-sm">
        THE ABOVE DETAILS ARE FINAL AND WILL BE USED FOR PAYMENT, IF ANY OF
        THESE DETAILS E WRONG PLEASE CONTACT YOUR MANAGER IMMEDIATELY! ALSO
        EMAIL THE SAME TO ACCOUNTS@EXAMBAZAAR.COM!
      </p>
      <hr className="border-2" />
    </div>
  );
};

export default BankDetails;
