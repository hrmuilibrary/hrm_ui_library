import{j as s}from"./jsx-runtime-uGtigUhx.js";import{T as a}from"./Text-CGJlnosw.js";import{I as c}from"./index-Ib2xM15K.js";import"./iframe-CCpZ0RzU.js";import"./preload-helper-Dp1pzeXC.js";import"./index-31GdvHSE.js";import"./IconYoutube-oOrWhdz0.js";import"./IconInfo-DaPyXjYs.js";import"./IconPerson-N3kFoPbx.js";import"./IconUnitsEmployee-CIp6I4TM.js";const C={title:"SVG Icons",component:null,argTypes:{size:{options:["xxlarge","xlarge","large","medium","small","xsmall","xxsmall"],control:{type:"select"}},type:{options:["primary","secondary","tertiary","disabled","inverse","selected","brand","danger","warning","success","information","discovery"],control:{type:"select"}},filled:{options:["false","true"],control:{type:"select"}}}},d=l=>s.jsx("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"flex-start"},children:Object.values(c).filter(t=>{const r=t.name.toLowerCase().includes("filled");return l.filled==="true"?r:!r}).map((t,r)=>s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",margin:"10px"},children:[s.jsx(t,{...l}),s.jsx(a,{className:"mt-8",children:t.name.replace(/^Icon([A-Z])/g,"$1").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()})]},r))}),e=d.bind({});e.args={size:"medium",type:"primary",filled:"false"};var o,n,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  return <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start'
  }}>
      {Object.values(Icons).filter(Component => {
      const isFilledIncluded = Component.name.toLowerCase().includes('filled');
      return args.filled === 'true' ? isFilledIncluded : !isFilledIncluded;
    }).map((Component, index) => <div key={index} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '10px'
    }}>
            <Component {...args} />
            <Text className="mt-8">
              {Component.name.replace(/^Icon([A-Z])/g, '$1').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}
            </Text>
          </div>)}
    </div>;
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const w=["SVGIcons"];export{e as SVGIcons,w as __namedExportsOrder,C as default};
