import FormInputField from "@components/Auth-Pages/FormInputField";
import FormRadioBtnsField from "@components/Form/FormRadioBtnsField";
import { useState } from "react";
import masterCardPhoto from "@assets/mastercard.png"
import visaPhoto from "@assets/visa.png"
import payPalPhoto from "@assets/paypal.png"
import * as z from "zod"
import useSavedCards from "@store/savedCards";
import { useNavigate, useParams } from "react-router-dom";


const AddCard = () => {

  const addCard = useSavedCards(state => state.addCard);
  const {username} = useParams();
  const navigate = useNavigate();

  type FormValues = {
    paymentMethod: "visa"|"mastercard"|"paypal";
    cardHolderName: string;
    cardNumber: string;
    expiryDate: string;
    cvc: string;
  }

  type FormErrors = {
    paymentMethod?: string;
    cardHolderName?: string;
    cardNumber?: string;
    expiryDate?: string;
    cvc?: string;
  }

  const [formValues, setFormValues] = useState<FormValues>({
    paymentMethod: "paypal",
    cardHolderName: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const handleInputChange = (name: string, value:string):void => {
    setFormValues({
      ...formValues,
      [name]:value
    })
  }

  const handleFormSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormErrors({});

    try {
      // Validation
      const result = validationSchema.safeParse(formValues);
      if (!result.success) {
        const validationErrors: FormErrors = {};
        result.error.errors.forEach((err) => {
          validationErrors[err.path[0] as keyof FormErrors]=err.message;
        });
        throw validationErrors;
      }

      // Success
      addCard({
        type: formValues.paymentMethod,
        number: formValues.cardNumber,
        expiry: formValues.expiryDate,
        holderName: formValues.cardHolderName,
      });
      resetForm();
      navigate(`/${username}/payments/saved`);

    } catch (err) {
      setFormErrors(err as FormErrors);
    }
  }

  const validationSchema = z.default.object({
    cardHolderName: z.default.string().nonempty("Name can not be empty!"),
    cardNumber: z.default.string().nonempty("Please provide the card number!"),
    expiryDate: z.default.string().nonempty("Please provide the expiry date!"),
    cvc: z.default.string().nonempty("Please provide the password"),
  })

  const resetForm = () => {
    setFormValues({
      paymentMethod: "paypal",
      cardHolderName: "",
      cardNumber: "",
      expiryDate: "",
      cvc: "",
    });
    setFormErrors({});
  }


  return (

    <section className='p-3 space-y-3 bg-white rounded-lg flex-grow'>

      <div className="space-y-2">
        <h2 className='text-lg font-semibold leading-none'>Card Details</h2>
        <p className="max-w-100 text-xxs font-normal text-[#33333380]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus facilisi donec egestas egestas pellentesque magna.</p>
      </div>

      <form onSubmit={handleFormSubmit} className='space-y-4'>
        
        <section>

          <FormRadioBtnsField
          data={[
            {label: <img src={masterCardPhoto} alt="" className="w-8"/>, id: "mastercard", value: "mastercard"},
            {label: <img src={visaPhoto} alt="" className="w-8"/>, id: "visa", value: "visa"},
            {label: <img src={payPalPhoto} alt="" className="w-12"/>, id: "paypal", value: "paypal"}
          ]}
          name={"paymentMethod"}
          title={"Select Payment Method:"}
          onChange={handleInputChange}
          error={formErrors.paymentMethod}
          legendClassName={"text-base font-medium"}
          ulClassName={"flex gap-4"}
          inputClassName={"hidden"}
          defaultSelected={"paypal"}/>

        </section>

        <section className="grid grid-cols-1 xs:grid-cols-[repeat(2,minmax(0,350px))] gap-4">

          <FormInputField
          label={"Card Holder Name"}
          type={"text"}
          name={"cardHolderName"}
          placeholder={"Enter card holder name"}
          value={formValues.cardHolderName}
          onChange={handleInputChange}
          error={formErrors.cardHolderName}
          inputClassName={"bg-[#F4F4F4] border-none"} />

          <FormInputField
          label={"Card Number"}
          type={"text"}
          name={"cardNumber"}
          placeholder={"xxxx-xxxx-xxxx"}
          value={formValues.cardNumber}
          onChange={handleInputChange}
          error={formErrors.cardNumber}
          inputClassName={"bg-[#F4F4F4] border-none"}
          numbersOnly={true} />

          <FormInputField
          label={"Expiry Date"}
          type={"date"}
          name={"expiryDate"}
          placeholder={"enter card expiry date"}
          value={formValues.expiryDate}
          onChange={handleInputChange}
          error={formErrors.expiryDate}
          inputClassName={"bg-[#F4F4F4] border-none"} />

          <FormInputField
          label={"CVC"}
          type={"password"}
          name={"cvc"}
          placeholder={"********"}
          value={formValues.cvc}
          onChange={handleInputChange}
          error={formErrors.cvc}
          inputClassName={"bg-[#F4F4F4] border-none"} />
          
        </section>

          <div className="space-x-2">
            <button type='submit' className='h-8.5 w-15 text-xxs font-medium text-white bg-gradient-to-r from-[#333EFF] to-[#5BCAFF] rounded-md leading-none cursor-pointer'>Save</button>
            <button type='button' onClick={resetForm} className='h-8.5 w-15 text-xxs font-medium rounded-md border-1 border-[#D6D6D6] leading-none' style={{cursor: 'pointer'}}>Cancel</button>
          </div>

      </form>

    </section>

  )
}

export default AddCard;


