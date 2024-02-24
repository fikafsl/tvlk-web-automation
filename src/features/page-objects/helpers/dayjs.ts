import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import idLocale from 'dayjs/locale/id';

dayjs.extend(customParseFormat);
dayjs.locale(idLocale);

export default dayjs;
