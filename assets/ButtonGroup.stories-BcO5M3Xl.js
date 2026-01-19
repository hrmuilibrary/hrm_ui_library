import{j as m,n as o}from"./Text-D__sJRfZ.js";import{B as i}from"./ButtonGroup-DPNhRfYi.js";import{R as l}from"./iframe-C4aqWbSv.js";import{I as n,a as d,b as x}from"./IconUnitsEmployee-DJhA1laA.js";import"./preload-helper-Dp1pzeXC.js";const P={title:"Button Group",component:i,argTypes:{type:{control:"select",options:["primary"]},size:{control:"select",options:["small","medium","large"]},buttonText:{control:"text",description:"Text for the button"}}},g=[{buttonText:"Units Employee",icons:{left:{Component:n},right:{Component:n}},onClick:o,id:"unitsEmployee"},{buttonText:"Only Employee",icons:{left:{Component:d}},onClick:o,id:"onlyEmployee"},{buttonText:"Project Product",icons:{left:{Component:x}},onClick:o,id:"projectProduct"}],b=a=>{const[y,p]=l.useState(1),u=e=>{console.log(`Active button index: ${e}`),p(e)};return m.jsx(i,{...a,buttons:g,activeIndex:"projectProduct",onTabChange:u})},t=b.bind({});t.args={type:"primary",size:"large"};var r,s,c;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  const [index, setIndex] = React.useState<number | string>(1);
  const onChange = (index: number | string) => {
    console.log(\`Active button index: \${index}\`);
    setIndex(index);
  };
  return <_ButtonGroup {...args} buttons={buttons} activeIndex={'projectProduct'} onTabChange={onChange} />;
}`,...(c=(s=t.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const h=["ButtonGroup"];export{t as ButtonGroup,h as __namedExportsOrder,P as default};
