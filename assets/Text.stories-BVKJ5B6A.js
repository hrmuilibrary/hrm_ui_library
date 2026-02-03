import{j as t}from"./jsx-runtime-CO_4fShW.js";import{T as a}from"./Text-CkXkE3Bq.js";import"./iframe-DQqQBVxO.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BjDT6sgC.js";import"./helpers-uRsMBXJT.js";const g={title:"Text",component:a,argTypes:{type:{options:["primary","secondary","tertiary","disabled","inverse","selected","brand","danger","warning","success","information","discovery"],control:{type:"radio"}},size:{options:["xxsmall","xsmall","small","standard","medium","large","xlarge"],control:{type:"radio"}},as:{options:["p","span","div","h1"],control:{type:"radio"}},lineHeight:{options:["xsmall","small","medium","large"],control:{type:"radio"}},weight:{options:["regular","semibold","bold","bolder"],control:{type:"radio"}}}},n=r=>t.jsx("div",{style:{padding:"20px",backgroundColor:`${r.type=="inverse"?"#919191":""}`},children:t.jsx(a,{...r,children:r.text})}),e=n.bind({});e.args={type:"primary",as:"p",size:"standard",lineHeight:"large",weight:"regular",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."};var o,s,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  return <div style={{
    padding: '20px',
    backgroundColor: \`\${args.type == 'inverse' ? '#919191' : ''}\`
  }}>
      <_Text {...args}>{args.text}</_Text>
    </div>;
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const y=["Text"];export{e as Text,y as __namedExportsOrder,g as default};
