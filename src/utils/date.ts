import dateFnsFormat from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

export const formatDate = (date: string, format: DateFormat, isIso?: boolean): string => {
	const parsedDate = new Date(isIso ? parseISO(date) : date)
	switch (format) {
		case DateFormat.MediumDate: {
			return dateFnsFormat(parsedDate, 'ccc do LLLL')
		}

		case DateFormat.ShortDate: {
			return dateFnsFormat(parsedDate, 'EEE, dd LLL')
		}

		default:
			throw new Error('Unsupported format')
	}
}

export enum DateFormat {
	MediumDate = 1,
	ShortDate = 2,
}
