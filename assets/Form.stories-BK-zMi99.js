import{j as t}from"./Text-BCy2auDT.js";import{r as u}from"./iframe-DbuX508q.js";import{b as d,a as p}from"./index.esm-BlilXSBC.js";import{u as I}from"./DropzoneFileUpload-CwB8h4Ko.js";import{F as l,m as x,I as L}from"./UnderConstruction-yQIFCI6E.js";import{B as S}from"./types-B_RHM9mB.js";import"./ButtonGroup-oSe1aLcB.js";import"./Chips-bt-0p-g_.js";import"./preload-helper-Dp1pzeXC.js";import"./IconInfo-D2MfdYuB.js";import"./IconChevronDoubleRight-BJ7fJSHq.js";import"./IconDismissCircleFilled-C_WNxUpC.js";import"./index-CaVCUHbj.js";const B={title:"Form Container",component:l},f=d({firstname:p().required("validation")}),A=()=>{const{trigger:o,onSubmit:s}=I(),a=async e=>{await(o==null?void 0:o("firstname"))&&s&&s()};return t.jsx(x,{name:"firstname",As:e=>t.jsx(L,{handleBlurEvent:a,...e})})},F=()=>{const o={firstname:""},[s,a]=u.useState(!1),e=i=>{a(!0),console.log(i)};return console.log(s),t.jsx("div",{style:{maxWidth:300},children:t.jsx(l,{onSubmit:e,validationScheme:f,initialValues:o,children:t.jsxs(t.Fragment,{children:[t.jsx(A,{}),t.jsx(S,{buttonActionType:"submit",buttonText:"Ok",className:"mt-16",isLoading:s})]})})})},n=F.bind({});var r,m,c;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`(): React.ReactElement => {
  const INITIAL_VALUES = {
    firstname: ''
  };
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = (data: any) => {
    setIsLoading(true);
    console.log(data);
  };
  console.log(isLoading);
  return <div style={{
    maxWidth: 300
  }}>
      <_FormContainer onSubmit={onSubmit} validationScheme={VALIDATION_SCHEME} initialValues={INITIAL_VALUES}>
        <>
          <CustomInput />
          {/*// @ts-ignore*/}
          {/*<FormField name="date" As={(props) => <SimpleDatePicker {...props} />} />*/}

          <Button buttonActionType="submit" buttonText={'Ok'} className="mt-16" isLoading={isLoading} />
        </>
      </_FormContainer>
    </div>;
}`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const k=["FormContainer"];export{n as FormContainer,k as __namedExportsOrder,B as default};
