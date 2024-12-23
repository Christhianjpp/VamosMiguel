import ShowMonth from '@/components/dashboard/event/ShowMonth';
import { getComsionMonth } from '@/libs/event/actions'
import { MesDocument } from '@/models/Mes';

async function getMes() {
    const resp = await getComsionMonth()
    const parsedResponse = JSON.parse(resp)
    return parsedResponse;
}

const pageVerMes = async () => {
    const mes = await getMes()
    return (
        <div className='pt-6'>
            <ShowMonth month={mes} />
        </div>
    )
}

export default pageVerMes