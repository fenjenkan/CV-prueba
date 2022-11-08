import axios from "axios";

export const getData = async(setChannel) =>{
    const url = `https://mfwkweb-api.clarovideo.net/services/epg/channel?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=guatemala&HKS=web61144bb49d549&user_id=54343080&date_from=20221105200000&date_to=20221106200000&quantity=20&skip=20`;
    const response = await axios.get(url)
    setChannel(response.data.response.channels)
    
}


