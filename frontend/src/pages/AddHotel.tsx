import { useMutation } from "react-query"
import ManageHotelForm from "../forms/ManageHotelForm/ManageHotelForm"
import { useAppContext, AppContext } from "../contexts/AppContext"
import * as apiClient from '../api-client'

const AddHotel = () => {
    const { showToast } = useAppContext() as AppContext;
    const { mutate, isLoading } = useMutation(apiClient.addMyHotel, {
        onSuccess: () => {
            showToast({ message: "Hotel Saved!", type: "SUCCESS"})
        },
        onError: () => {
            showToast({ message: "Error Saving Hotel", type: "ERROR"})
        }
    })

    const handleSave = (hotelFormData: FormData) => {
        console.log('handleSave hotelFormData:', hotelFormData)
        mutate(hotelFormData)
    }

    return (<ManageHotelForm onSave={handleSave} isLoading={isLoading} />)
}

export default AddHotel