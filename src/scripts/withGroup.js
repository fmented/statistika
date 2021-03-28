class Des{
    constructor(input){
        this.input = input
        if(input.length) this.init() 
        return
    }

    init(){

        this.input_total = this.input.reduce((total, currentVal)=> total += currentVal)
        this.input_min = Math.min(...this.input)
        this.input_max = Math.max(...this.input)
          

        this.range = this.input_max-this.input_min
        let rangeDisplay = ['Rang\\e = max – min', `= ${this.input_max}-${this.input_min}`, `= ${this.range}`]

        let _cls = 1 + 3.3 * Math.log10(this.input.length)
        this.cls = Number.isInteger(_cls) ? _cls : Math.ceil(_cls)
        let clsDisplay = ['Class = 1+3.3 Log(n)',`= 1+3.3 Log(${this.input.length})`, `= 1+3.3 (${Math.log10(this.input.length)})`, `= ${1+3.3*Math.log10(this.input.length)} ~~ ${this.cls}`, `= ${this.cls}`]

        this.interval = Number.isInteger(this.range/this.cls) ? this.range/this.cls : Math.ceil((this.range/this.cls))
        let intervalDisplay = ['Interval = frac{rang\\e}{class}', `= frac{${this.range}}{${this.cls}}`, `= ${this.range/this.cls} ~~ ${this.interval}`, `= ${this.interval}`]


        let table = []
        let fixi_sum = 0
        let fixi2_sum = 0
        let _last_fc = 0


        for (let i = 0; i < this.cls; i++) {
            let _i_min = i*this.interval+this.input_min
            let _i_max = this.interval!=0?_i_min+this.interval-1:_i_min+this.interval
            let fi = this.input.filter(i=>i>=_i_min&&i<=_i_max).length
            let xi = (_i_min+_i_max)/2
            let fixi = fi*xi
            table.push({
                interval:`${_i_min}-${_i_max}`,
                fi,
                xi,
                fc: fi+_last_fc,
        
                min: _i_min-.5,
                max: _i_max+.5,
                fixi,
                xi2:xi**2,
                fixi2:fi*(xi**2)
            })
            _last_fc+=fi
            fixi2_sum+=fi*xi**2
            fixi_sum+=fixi
            
            
        }
        this.fixi2_sum = fixi2_sum
        this.fixi_sum = fixi_sum
        this.fi_sum = _last_fc
        this.mean = fixi_sum/this.fi_sum
        let meanDisplay = ['Mean=frac{sumFiX\\i}{sumFi}', `= frac{${fixi_sum}}{${this.fi_sum}}`, `= ${this.mean.toFixed(2)}`]

        let hifi_index = table.indexOf(table.filter(i=>i.fi==Math.max(...table.map(i=>i.fi)))[0])
        
        this.f = [table[hifi_index].fi, hifi_index==0?0:table[hifi_index-1].fi, hifi_index==table.length-1?0:table[hifi_index+1].fi]
        this.b = table[hifi_index].min
        this.jf = (hifi_index==0)?0:table[hifi_index-1].fc
        this.hifi_index = hifi_index
        this.table = table

        this.median = table[hifi_index].min + this.interval * (1/2*_last_fc-this.jf)/table[hifi_index].fi
        let medianDisplay = ['Median = b+i((frac{1}{2}n-Jf)/f)', `= ${this.b}+${this.interval}((frac{1}{2}${this.fi_sum}-${this.jf})/${this.f[0]})`, `= ${this.b}+${this.interval}(${(.5*this.fi_sum-this.jf)/this.f[0]})`, `= ${this.median.toFixed(2)}`]

        this.mode = table[hifi_index].min + this.interval * ((this.f[0]-this.f[1])/((this.f[0]-this.f[1])+(this.f[0]-this.f[2])))
        let modeDisplay = ['Mode=b+i((F1)/(F1+F2))', `= ${this.b}+${this.interval}((${this.f[0]}-${this.f[1]})/((${this.f[0]}-${this.f[1]})+(${this.f[0]}-${this.f[2]})))`, `= ${this.b}+${this.interval}(${this.f[0]-this.f[1]}/(${this.f[0]-this.f[1]}+${this.f[0]-this.f[2]}))`, `= ${this.mode.toFixed(2)}`]

        this.sd = Math.sqrt((_last_fc*fixi2_sum-(fixi_sum**2))/(30*(30-1)))
        let sdDisplay = [
            'S = sqrt((n sumFiX\\i^2-(sumFiX\\i)^2)/(n(n-1)))',
            `= sqrt((${this.fi_sum * this.fixi2_sum}-${fixi_sum**2})/(${this.fi_sum}(${this.fi_sum}-1)))`,
            `= sqrt((${(this.fi_sum*this.fixi2_sum)-(fixi_sum**2)})/(${this.fi_sum*(this.fi_sum-1)}))`,
            `= ${this.sd.toFixed(2)}`
        ]
        this.display = {
            sd:sdDisplay,
            mean:meanDisplay,
            median:medianDisplay,
            mode:modeDisplay,
            range:rangeDisplay,
            cls:clsDisplay,
            interval:intervalDisplay
        }
    }

}

export default function(i){
    return new Des(i)
}