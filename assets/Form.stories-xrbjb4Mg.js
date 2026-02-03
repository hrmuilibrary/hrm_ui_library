import{j as r}from"./jsx-runtime-CO_4fShW.js";import{r as l}from"./iframe-DQqQBVxO.js";import{b as A,a as L}from"./index.esm-BhHvn13X.js";import{u as V,g as v,C as S,F as b}from"./FormContainer-ODml6sNw.js";import{E as _}from"./ErrorMessage-DTromK9_.js";import{F as N}from"./types-DyQXMykX.js";import{c as O}from"./index-BjDT6sgC.js";import{B as R}from"./Button-CBwOmmgy.js";import{I as q}from"./Input-CrJdjlWu.js";import{u as M}from"./useFormProps-DTRhIMFF.js";import"./preload-helper-Dp1pzeXC.js";import"./Text-CkXkE3Bq.js";import"./helpers-uRsMBXJT.js";import"./IconDynamicComponent-B891EqQ-.js";import"./index-PL4QBPBs.js";import"./Label-B-YUXvnx.js";import"./IconCheckmarkCircleFilled-BqhIIHve.js";var D=function(e){var t=e.as,s=e.errors,o=e.name,n=e.message,u=e.render,F=(function(c,h){if(c==null)return{};var a,i,f={},I=Object.keys(c);for(i=0;i<I.length;i++)h.indexOf(a=I[i])>=0||(f[a]=c[a]);return f})(e,["as","errors","name","message","render"]),d=V(),m=v(s||d.formState.errors,o);if(!m)return null;var p=m.message,E=m.types,g=Object.assign({},F,{children:p||n});return l.isValidElement(t)?l.cloneElement(t,g):u?u({message:p||n,messages:E}):l.createElement(t||l.Fragment,g)};const j=e=>{const{As:t,name:s,className:o="",dataId:n="",hideErrorMessage:u=!1,errorMessageIcon:F,defaultValue:d}=e,{register:m,errors:p,setValue:E,control:g}=l.useContext(N);if(!m)return null;const c=m(s);return r.jsx("div",{className:O("form-container__field",o,s),children:r.jsx(S,{control:g,name:s,...d?{defaultValue:d}:{},render:({field:h,fieldState:a})=>r.jsxs(r.Fragment,{children:[t({hasError:!!a.error,isValid:a.isTouched&&a.isDirty&&!a.invalid,dataId:n,...c,setFieldValue:(i,f,I)=>E(i,f,{shouldValidate:!0,shouldDirty:!0,shouldTouch:!0,...I}),...h}),u?null:r.jsx(D,{name:s,errors:p,render:({message:i})=>r.jsx(_,{dataId:n,message:i||"",className:"full-width",icon:F})})]})})})};j.__docgenInfo={description:"",methods:[],displayName:"FormField",props:{As:{required:!0,tsType:{name:"signature",type:"function",raw:"(props: IFormCompProps) => React.ReactElement",signature:{arguments:[{type:{name:"IFormCompProps"},name:"props"}],return:{name:"ReactReactElement",raw:"React.ReactElement"}}},description:""},name:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},dataId:{required:!1,tsType:{name:"string"},description:""},hideErrorMessage:{required:!1,tsType:{name:"boolean"},description:""},errorMessageIcon:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"any"},description:""}}};const oe={title:"Form Container",component:b},k=A({firstname:L().required("validation")}),w=()=>{const{trigger:e,onSubmit:t}=M(),s=async o=>{await(e==null?void 0:e("firstname"))&&t&&t()};return r.jsx(j,{name:"firstname",As:o=>r.jsx(q,{handleBlurEvent:s,...o})})},B=()=>{const e={firstname:""},[t,s]=l.useState(!1),o=n=>{s(!0),console.log(n)};return console.log(t),r.jsx("div",{style:{maxWidth:300},children:r.jsx(b,{onSubmit:o,validationScheme:k,initialValues:e,children:r.jsxs(r.Fragment,{children:[r.jsx(w,{}),r.jsx(R,{buttonActionType:"submit",buttonText:"Ok",className:"mt-16",isLoading:t})]})})})},x=B.bind({});var y,T,C;x.parameters={...x.parameters,docs:{...(y=x.parameters)==null?void 0:y.docs,source:{originalSource:`(): React.ReactElement => {
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
}`,...(C=(T=x.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const ne=["FormContainer"];export{x as FormContainer,ne as __namedExportsOrder,oe as default};
