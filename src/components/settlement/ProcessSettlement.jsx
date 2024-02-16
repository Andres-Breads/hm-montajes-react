import { Button } from '@mui/base'
import { Box } from '@mui/system'
import axios from 'axios'


export default function ProcessSettlement({id,fuctionSetter}) {

  const handleProcess = () => {
    axios.post('https://hm-montajes.onrender.com/settlement/api/v1/process/', {
        id: id,
    })
    .then(response => {
        fuctionSetter(response.data)
    })
}
  return (
    <Box sx={{paddingTop: "1px", mb:1}}>
        <Button variant="contained" onClick={handleProcess}>
            Procesar Liquidación
        </Button>
    </Box>

  )
}
