import{j as t}from"./jsx-runtime-B0b0QkDi.js";import{r as p}from"./iframe-BFHg0vP5.js";import{b as l,a as u}from"./index.esm-Nn2uHdrZ.js";import{F as d}from"./FormContainer-B8DWnMA6.js";import{F as I}from"./FormField-BYa5unbU.js";import{B as f}from"./Button-1m6dLyK7.js";import{I as x}from"./Input-DlWrvQ34.js";import{u as L}from"./useFormProps-CQ-ti30j.js";import"./types-B59vX58w.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CwJlQUNM.js";import"./ErrorMessage-CK_thhKR.js";import"./Text-Bo5RN8nY.js";import"./helpers-DSVtpnDC.js";import"./IconDynamicComponent-D-EMrMHu.js";import"./index-v3STkguG.js";import"./Label-Do7OgWzo.js";import"./IconCheckmarkCircleFilled-5d4foe8u.js";const $={title:"Form Container",component:d},S=l({firstname:u().required("validation")}),F=()=>{const{trigger:o,onSubmit:e}=L(),n=async s=>{await(o==null?void 0:o("firstname"))&&e&&e()};return t.jsx(I,{name:"firstname",As:s=>t.jsx(x,{handleBlurEvent:n,...s})})},A=()=>{const o={firstname:""},[e,n]=p.useState(!1),s=i=>{n(!0),console.log(i)};return console.log(e),t.jsx("div",{style:{maxWidth:300},children:t.jsx(d,{onSubmit:s,validationScheme:S,initialValues:o,dataTestId:"form-container",children:t.jsxs(t.Fragment,{children:[t.jsx(F,{}),t.jsx(f,{buttonActionType:"submit",buttonText:"Ok",className:"mt-16",isLoading:e})]})})})},r=A.bind({});var a,m,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`(): React.ReactElement => {
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
      <_FormContainer onSubmit={onSubmit} validationScheme={VALIDATION_SCHEME} initialValues={INITIAL_VALUES} dataTestId="form-container">
        <>
          <CustomInput />
          {/*// @ts-ignore*/}
          {/*<FormField name="date" As={(props) => <SimpleDatePicker {...props} />} />*/}

          <Button buttonActionType="submit" buttonText={'Ok'} className="mt-16" isLoading={isLoading} />
        </>
      </_FormContainer>
    </div>;
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const H=["FormContainer"];export{r as FormContainer,H as __namedExportsOrder,$ as default};
