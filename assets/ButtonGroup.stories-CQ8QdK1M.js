import{j as m}from"./jsx-runtime-uGtigUhx.js";import{B as i}from"./ButtonGroup-CujBHiIl.js";import{R as l}from"./iframe-CCpZ0RzU.js";import{I as n,a as d,b as x}from"./IconUnitsEmployee-CIp6I4TM.js";import{n as o}from"./Text-CGJlnosw.js";import"./index-31GdvHSE.js";import"./preload-helper-Dp1pzeXC.js";const B={title:"Button Group",component:i,argTypes:{type:{control:"select",options:["primary"]},size:{control:"select",options:["small","medium","large"]},buttonText:{control:"text",description:"Text for the button"}}},g=[{buttonText:"Units Employee",icons:{left:{Component:n},right:{Component:n}},onClick:o,id:"unitsEmployee"},{buttonText:"Only Employee",icons:{left:{Component:d}},onClick:o,id:"onlyEmployee"},{buttonText:"Project Product",icons:{left:{Component:x}},onClick:o,id:"projectProduct"}],b=p=>{const[y,a]=l.useState(1),u=e=>{console.log(`Active button index: ${e}`),a(e)};return m.jsx(i,{...p,buttons:g,activeIndex:"projectProduct",onTabChange:u})},t=b.bind({});t.args={type:"primary",size:"large"};var r,s,c;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  const [index, setIndex] = React.useState<number | string>(1);
  const onChange = (index: number | string) => {
    console.log(\`Active button index: \${index}\`);
    setIndex(index);
  };
  return <_ButtonGroup {...args} buttons={buttons} activeIndex={'projectProduct'} onTabChange={onChange} />;
}`,...(c=(s=t.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const E=["ButtonGroup"];export{t as ButtonGroup,E as __namedExportsOrder,B as default};
