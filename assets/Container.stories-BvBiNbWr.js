import{j as e}from"./jsx-runtime-Cj1-3MCq.js";import{T as p}from"./Text-CilXBu1n.js";import{B as c}from"./Button-DlZuiUDW.js";import{n as m}from"./helpers-DYJyNS-c.js";import"./iframe-CfhHRHWj.js";import"./preload-helper-Dp1pzeXC.js";import"./index-LyawtWbk.js";const n=r=>{const{children:a,dataTestId:d=""}=r;return e.jsx("div",{className:"container","data-test-id":d,children:a})};n.__docgenInfo={description:"",methods:[],displayName:"Container",props:{dataTestId:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const j={title:"Container",component:n},l=()=>{const r={marginTop:"10px"};return e.jsx("div",{children:e.jsx(n,{dataTestId:"container-1",children:e.jsxs("div",{children:[e.jsx(p,{size:"small"}),e.jsx("div",{style:r,children:e.jsx(c,{buttonText:"Next",onClick:m,type:"primary"})})]})})})},t=l.bind({});var o,s,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`(): React.ReactElement => {
  const helperStyles = {
    marginTop: '10px'
  };
  return <div>
      <_Container dataTestId="container-1">
        <div>
          <Text size="small" />
          <div style={helperStyles}>
            <Button buttonText="Next" onClick={noop} type="primary" />
          </div>
        </div>
      </_Container>
    </div>;
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const f=["Container"];export{t as Container,f as __namedExportsOrder,j as default};
