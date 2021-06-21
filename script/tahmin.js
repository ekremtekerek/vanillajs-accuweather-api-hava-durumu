const key = 'rBA1bmEnvkNPJWwAsLRVYC9lsF5jFRge';
const havaDurumuGetir = async (id) => {
    const temelUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
    sorgu = `?apikey=${id}&q=${key}`;
    const res = await fetch(temelUrl+sorgu);
    const veri = await res.json();
}

const sehirGetir = async(konum) => {
    const temelUrl = "http://dataservice.accuweather.com/locations/v1/cities/search";

    sorgu = `?apikey=${key}&q=${konum}`;
    const res = await fetch(temelUrl+sorgu);
    const veri = await res.json();

    return veri[0];

}

sehirGetir('adana').then(veri => {
    return havaDurumuGetir(veri.Key)
})
.then(veri => {
    console.log(veri);
})
.catch(err => {
    console.log(err);
})
;