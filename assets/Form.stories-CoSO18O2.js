import{j as t}from"./jsx-runtime-BtgfURVQ.js";import{r as p}from"./iframe-Dzwn7jFr.js";import{b as l,a as u}from"./index.esm-B914zvaK.js";import{F as d}from"./FormContainer-P001Uf4M.js";import{F as I}from"./FormField-DJKTX6Xa.js";import{B as f}from"./Button-DwuE8RYj.js";import{I as x}from"./Input-CvBeAiws.js";import{u as L}from"./useFormProps-Uo0oAIx2.js";import"./types-XEo9Gk2s.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BSkP1pyL.js";import"./ErrorMessage-Cv4wEjz1.js";import"./Text-DlqznRJU.js";import"./helpers-Jrcu8OdA.js";import"./IconDynamicComponent-CIdkvJV_.js";import"./index-BI6OO8u8.js";import"./Label-Do6HhDve.js";import"./IconCheckmarkCircleFilled-nMLbhk0t.js";const $={title:"Form Container",component:d},S=l({firstname:u().required("validation")}),F=()=>{const{trigger:o,onSubmit:e}=L(),n=async s=>{await(o==null?void 0:o("firstname"))&&e&&e()};return t.jsx(I,{name:"firstname",As:s=>t.jsx(x,{handleBlurEvent:n,...s})})},A=()=>{const o={firstname:""},[e,n]=p.useState(!1),s=i=>{n(!0),console.log(i)};return console.log(e),t.jsx("div",{style:{maxWidth:300},children:t.jsx(d,{onSubmit:s,validationScheme:S,initialValues:o,dataTestId:"form-container",children:t.jsxs(t.Fragment,{children:[t.jsx(F,{}),t.jsx(f,{buttonActionType:"submit",buttonText:"Ok",className:"mt-16",isLoading:e})]})})})},r=A.bind({});var a,m,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`(): React.ReactElement => {
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
