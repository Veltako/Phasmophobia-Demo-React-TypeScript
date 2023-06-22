export interface attributes {
    attributes: {
        id: number,
        title: string,
        description: string,
        image: {
            data: {
                attributes: {
                    url: string
                }
            }[]
        }
    }
}