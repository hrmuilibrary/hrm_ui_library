import{j as t}from"./jsx-runtime-BiqM-ecW.js";import{r as p}from"./iframe-8txO-2QW.js";import{b as l,a as u}from"./index.esm-tzifCht2.js";import{F as d}from"./FormContainer-DjtAv7Jy.js";import{F as I}from"./FormField-B3lNWxU4.js";import{B as f}from"./Button-s8UnDnUL.js";import{I as x}from"./Input-CQ_CuX5Y.js";import{u as L}from"./useFormProps-0QM-rMaz.js";import"./types-Mv-0p2EE.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bz2E60yl.js";import"./ErrorMessage-BLKtwRy7.js";import"./Text-t4HXzC8T.js";import"./helpers-Ho8Wwbj1.js";import"./IconDynamicComponent-CYGUY6tn.js";import"./index-VWooKi48.js";import"./Label-C7686ZOL.js";import"./IconCheckmarkCircleFilled-DaPe2ciB.js";const $={title:"Form Container",component:d},S=l({firstname:u().required("validation")}),F=()=>{const{trigger:o,onSubmit:e}=L(),n=async s=>{await(o==null?void 0:o("firstname"))&&e&&e()};return t.jsx(I,{name:"firstname",As:s=>t.jsx(x,{handleBlurEvent:n,...s})})},A=()=>{const o={firstname:""},[e,n]=p.useState(!1),s=i=>{n(!0),console.log(i)};return console.log(e),t.jsx("div",{style:{maxWidth:300},children:t.jsx(d,{onSubmit:s,validationScheme:S,initialValues:o,dataTestId:"form-container",children:t.jsxs(t.Fragment,{children:[t.jsx(F,{}),t.jsx(f,{buttonActionType:"submit",buttonText:"Ok",className:"mt-16",isLoading:e})]})})})},r=A.bind({});var a,m,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`(): React.ReactElement => {
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
