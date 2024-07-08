const fillV=[0,1]
const wghtV=[100,200,300,400,500,600,700]
const gradeV=[-25,0,200]
const opsV=[18,20,24,40,48]
const res = []
wghtV.map((w,indexw)=>
    opsV.map((o,indexO)=>
        gradeV.map((g,indexG)=>
            fillV.map((f,indexF)=> {
                // console.log(g)
                res.push(`font-vs-[${f}_${w}_${g}_${o}]`)
            })
        )
    )
)
module.exports = res