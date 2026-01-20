import{j as t}from"./Text-CKGaIGJ0.js";import{r as u}from"./iframe-DpMxAmj9.js";import{b as d,a as p}from"./index.esm-e5E90Arr.js";import{u as I}from"./DropzoneFileUpload-C2ZWgrjN.js";import{F as l,m as x,I as L}from"./UnderConstruction-DPyuyZui.js";import{B as S}from"./types-BrDM8sXB.js";import"./ButtonGroup-BgsQd8GB.js";import"./Chips-BmNorCMb.js";import"./preload-helper-Dp1pzeXC.js";import"./IconInfo-BD2IbNse.js";import"./IconChevronDoubleRight-Ij4DwE2P.js";import"./IconDismissCircleFilled-lD4REoq8.js";import"./index-BuZNQKp7.js";const B={title:"Form Container",component:l},f=d({firstname:p().required("validation")}),A=()=>{const{trigger:o,onSubmit:s}=I(),a=async e=>{await(o==null?void 0:o("firstname"))&&s&&s()};return t.jsx(x,{name:"firstname",As:e=>t.jsx(L,{handleBlurEvent:a,...e})})},F=()=>{const o={firstname:""},[s,a]=u.useState(!1),e=i=>{a(!0),console.log(i)};return console.log(s),t.jsx("div",{style:{maxWidth:300},children:t.jsx(l,{onSubmit:e,validationScheme:f,initialValues:o,children:t.jsxs(t.Fragment,{children:[t.jsx(A,{}),t.jsx(S,{buttonActionType:"submit",buttonText:"Ok",className:"mt-16",isLoading:s})]})})})},n=F.bind({});var r,m,c;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`(): React.ReactElement => {
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
