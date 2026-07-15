import{j as t}from"./jsx-runtime-hG3Vka6i.js";import{r as p}from"./iframe-G8znBDlN.js";import{b as l,a as u}from"./index.esm-uw3DxpPH.js";import{F as d}from"./FormContainer-BwAu6vGz.js";import{F as I}from"./FormField-BvvdBn7O.js";import{B as f}from"./Button-DSZy3bBL.js";import{I as x}from"./Input-B1vvj3CK.js";import{u as L}from"./useFormProps-DIAcs8Th.js";import"./types-DFaGMykD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BzgLc-4F.js";import"./ErrorMessage-DV_eGs6U.js";import"./Text-BGs7_8FC.js";import"./helpers-DAKI7Y_y.js";import"./IconDynamicComponent-tVGzrZ1J.js";import"./index-C-kaY9gP.js";import"./Label-Bi9Do9zE.js";import"./IconCheckmarkCircleFilled-xwTwBnjJ.js";const $={title:"Form Container",component:d},S=l({firstname:u().required("validation")}),F=()=>{const{trigger:o,onSubmit:e}=L(),n=async s=>{await(o==null?void 0:o("firstname"))&&e&&e()};return t.jsx(I,{name:"firstname",As:s=>t.jsx(x,{handleBlurEvent:n,...s})})},A=()=>{const o={firstname:""},[e,n]=p.useState(!1),s=i=>{n(!0),console.log(i)};return console.log(e),t.jsx("div",{style:{maxWidth:300},children:t.jsx(d,{onSubmit:s,validationScheme:S,initialValues:o,dataTestId:"form-container",children:t.jsxs(t.Fragment,{children:[t.jsx(F,{}),t.jsx(f,{buttonActionType:"submit",buttonText:"Ok",className:"mt-16",isLoading:e})]})})})},r=A.bind({});var a,m,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`(): React.ReactElement => {
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
