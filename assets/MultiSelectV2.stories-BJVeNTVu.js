import{j as e}from"./jsx-runtime-Kan_8xrb.js";import{r as c}from"./iframe-CoSMEsie.js";import{b as he,d as ye}from"./index.esm-Cjx5qK3_.js";import{c as E}from"./index-DV_X6Qry.js";import{T as y}from"./Text-ojGX6TEE.js";import{A as P}from"./AvatarGroup-BJOdy4Gf.js";import{B as fe}from"./BadgeV2-CgEIV35O.js";import{I as be}from"./IconDismiss-Ca1esRKs.js";import{L as Se}from"./Label-CB4NFAxp.js";import{E as xe}from"./ErrorMessage-BUB1h4Qz.js";import"./types-DTFyRcpY.js";import{u as Te}from"./useOnOutsideClick-Cc5bWvJv.js";import{F as Ie}from"./FormContainer-pjsbiM7W.js";import{F as qe}from"./FormField-DZ357qgj.js";import{B as _e}from"./Button-vf1Fpt4m.js";import"./preload-helper-Dp1pzeXC.js";import"./helpers-DP7MF_vJ.js";import"./Tooltip-BuAw_YGY.js";import"./index-AboGxAif.js";import"./index-DNYT35Kh.js";import"./DropzoneFileUpload-De---nQM.js";import"./useFormProps-BGsr0HXU.js";import"./IconArrowDownloadFilled-CVuOA-7T.js";import"./Snackbar-CApPu7mg.js";import"./IconDynamicComponent-CvKtQlK5.js";import"./Alert-CMpqQD6M.js";import"./IconDismissFilled-Cz4FgAuN.js";import"./Progress-B2wbEs2j.js";import"./IconAdd-DRgt5XfH.js";const v=c.forwardRef((d,i)=>{const{options:s,selectedItems:o,value:a,onAdd:n,onRemove:u,setFieldValue:p,name:T,placeholder:ne,hasError:C,label:le,labelAddons:de,required:oe,disabled:m,error:h,helperText:R,className:me="",dataTestId:I="",size:ce="medium",dropdownWidth:F,translations:A,dataTestIdPrefix:ue}=d,[V,k]=c.useState(""),[z,q]=c.useState(!1),W=c.useRef(null),pe=c.useId(),r=ue||I,O=C!==void 0?C:!!h,_=c.useMemo(()=>a||o||[],[a,o]);Te(W.current,()=>{q(!1),k("")},z,pe);const D=s.filter(t=>{var g;return!_.find(N=>N.id===t.id)&&(t.name.toLowerCase().includes(V.toLowerCase())||((g=t.meta)==null?void 0:g.toLowerCase().includes(V.toLowerCase())))}),ge=t=>{if(m)return;const g=[..._,t];T&&p&&p(T,g),n==null||n(t),k(""),q(!1)},ve=t=>{if(m)return;const g=_.filter(N=>N.id!==t);T&&p&&p(T,g),u==null||u(t)};return e.jsxs("div",{className:E("multi-select-v2",`multi-select-v2--${ce}`,me,{"multi-select-v2--invalid":O,"multi-select-v2--disabled":m}),children:[e.jsx(Se,{text:le,required:oe,disabled:m,labelAddons:de,dataTestId:I}),e.jsxs("div",{ref:W,className:E("multi-select-v2__inner","flexbox","align-items--center","gap-8"),"data-test-id":I,children:[_.map(t=>e.jsxs("div",{className:E("multi-select-v2__chip",{"multi-select-v2__chip--highlighted":t.highlighted}),children:[e.jsx(P,{initials:t.initials,size:"xsmall"}),e.jsx(y,{size:"small",type:t.highlighted?"selected":void 0,className:"multi-select-v2__chip-name",children:t.name}),t.badge?e.jsx(fe,{text:t.badge,size:"small",type:"gray",style:"light",className:"multi-select-v2__chip-badge",dataTestId:r?`${r}-badge-${t.id}`:void 0}):null,e.jsx("button",{type:"button",className:"multi-select-v2__chip-remove",disabled:m,"data-test-id":r?`${r}-chip-remove-${t.id}`:void 0,onClick:()=>ve(t.id),children:e.jsx(be,{size:"xxsmall",type:"tertiary"})})]},t.id)),e.jsx("div",{className:"multi-select-v2__search-wrap",children:e.jsx("input",{ref:i,className:"multi-select-v2__search",disabled:m,"data-test-id":r?`${r}-search`:void 0,value:V,placeholder:ne,onChange:t=>{k(t.target.value),q(!0)},onFocus:()=>q(!0)})}),z&&!m?e.jsx("div",{className:"multi-select-v2__dropdown",style:F?{width:F,right:"auto"}:void 0,children:D.length>0?D.map(t=>e.jsxs("button",{type:"button",className:"multi-select-v2__dropdown-item","data-test-id":r?`${r}-dropdown-item-${t.id}`:void 0,onClick:()=>ge(t),children:[e.jsx(P,{initials:t.initials,size:"xsmall"}),e.jsxs("div",{className:"multi-select-v2__dropdown-info",children:[e.jsx(y,{size:"small",weight:"semibold",children:t.name}),t.meta?e.jsx(y,{size:"xsmall",type:"tertiary",children:t.meta}):null]})]},t.id)):e.jsx(y,{size:"small",type:"tertiary",className:"multi-select-v2__dropdown-empty",dataTestId:r?`${r}-dropdown-empty`:void 0,children:A==null?void 0:A.emptyListMainMessage})}):null]}),h||R?e.jsxs("div",{className:"multi-select-v2__message mt-8",children:[O&&h?e.jsx(xe,{message:h,icon:"infoFilled",dataTestId:I}):null,R&&!(O&&h)?e.jsx(y,{size:"small",type:m?"disabled":"secondary",children:R}):null]}):null]})});v.displayName="MultiSelectV2";v.__docgenInfo={description:"",methods:[],displayName:"MultiSelectV2",props:{dataTestId:{required:!1,tsType:{name:"string"},description:""},hasError:{required:!1,tsType:{name:"boolean"},description:""},isValid:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"TFormValue"},description:""},onChange:{required:!1,tsType:{name:"TOnChange"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},setFieldValue:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  name: string,
  value: TFormValue,
  shouldValidate?: { shouldValidate: boolean }
) => void`,signature:{arguments:[{type:{name:"string"},name:"name"},{type:{name:"TFormValue"},name:"value"},{type:{name:"signature",type:"object",raw:"{ shouldValidate: boolean }",signature:{properties:[{key:"shouldValidate",value:{name:"boolean",required:!0}}]}},name:"shouldValidate"}],return:{name:"void"}}},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string
  name: string
  initials: string
  meta?: string
  badge?: string
  highlighted?: boolean
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"initials",value:{name:"string",required:!0}},{key:"meta",value:{name:"string",required:!1}},{key:"badge",value:{name:"string",required:!1}},{key:"highlighted",value:{name:"boolean",required:!1}}]}}],raw:"TMultiSelectOption[]"},description:""},selectedItems:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string
  name: string
  initials: string
  meta?: string
  badge?: string
  highlighted?: boolean
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"initials",value:{name:"string",required:!0}},{key:"meta",value:{name:"string",required:!1}},{key:"badge",value:{name:"string",required:!1}},{key:"highlighted",value:{name:"boolean",required:!1}}]}}],raw:"TMultiSelectOption[]"},description:""},onAdd:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: TMultiSelectOption) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string
  name: string
  initials: string
  meta?: string
  badge?: string
  highlighted?: boolean
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"initials",value:{name:"string",required:!0}},{key:"meta",value:{name:"string",required:!1}},{key:"badge",value:{name:"string",required:!1}},{key:"highlighted",value:{name:"boolean",required:!1}}]}},name:"item"}],return:{name:"void"}}},description:""},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}]},description:""},labelAddons:{required:!1,tsType:{name:"ReactElement"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}]},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},dropdownWidth:{required:!1,tsType:{name:"number"},description:""},translations:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  emptyListMainMessage?: string
}`,signature:{properties:[{key:"emptyListMainMessage",value:{name:"string",required:!1}}]}},description:""},dataTestIdPrefix:{required:!1,tsType:{name:"string"},description:""}}};const at={title:"MultiSelectV2",component:v,argTypes:{size:{options:["small","medium","large"],control:{type:"radio"}}}},l=[{id:"1",name:"Ann Smith",initials:"AS",meta:"HR Manager · People",badge:"You",highlighted:!0},{id:"2",name:"John Doe",initials:"JD",meta:"Engineer · Engineering"},{id:"3",name:"Maria Petrosyan",initials:"MP",meta:"Designer · Product"},{id:"4",name:"David Grant",initials:"DG",meta:"Recruiter · People"}],w=d=>{const[i,s]=c.useState(()=>d.selectedItems??[]),o=n=>s(u=>[...u,n]),a=n=>s(u=>u.filter(p=>p.id!==n));return e.jsx("div",{style:{maxWidth:400},children:e.jsx(v,{...d,selectedItems:i,onAdd:o,onRemove:a})})},f=w.bind({});f.args={options:l,label:"Participants",placeholder:"Search and select people",selectedItems:[l[0]],helperText:"Add people to notify about this trip.",required:!0,size:"medium",dataTestIdPrefix:"multi-select-v2"};const je=()=>{const[d,i]=c.useState({small:[],medium:[],large:[]});return e.jsx("div",{style:{maxWidth:400,display:"flex",flexDirection:"column",gap:24},children:["small","medium","large"].map(s=>e.jsx(v,{size:s,label:s,options:l,placeholder:"Search and select people",selectedItems:d[s],onAdd:o=>i(a=>({...a,[s]:[...a[s],o]})),onRemove:o=>i(a=>({...a,[s]:a[s].filter(n=>n.id!==o)}))},s))})},j=je.bind({}),b=w.bind({});b.args={options:l,label:"Reviewers",placeholder:"Add a reviewer...",dropdownWidth:320,dataTestIdPrefix:"multi-select-v2-fixed-width"};const S=w.bind({});S.args={options:l,label:"Skills",placeholder:"Add a skill...",required:!0,hasError:!0,error:"Select at least one option.",dataTestId:"multi-select-v2-error"};const x=w.bind({});x.args={options:l,label:"Participants",selectedItems:[l[0],l[1]],disabled:!0,dataTestId:"multi-select-v2-disabled"};const Me=he({managers:ye().min(1,"validation").required("validation")}),we=()=>{const d=i=>{console.log(i)};return e.jsx("div",{style:{maxWidth:400},children:e.jsx(Ie,{onSubmit:d,validationScheme:Me,initialValues:{managers:[]},dataTestId:"multi-select-v2-form",children:e.jsxs(e.Fragment,{children:[e.jsx(qe,{name:"managers",As:i=>e.jsx(v,{...i,options:l,placeholder:"Search and select people",label:"label"})}),e.jsx(_e,{buttonActionType:"submit",buttonText:"Save",className:"mt-16"})]})})})},M=we.bind({});var $,L,B;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  const [selectedItems, setSelectedItems] = useState<TMultiSelectOption[]>(() => args.selectedItems ?? []);
  const onAdd = (item: TMultiSelectOption) => setSelectedItems(prev => [...prev, item]);
  const onRemove = (id: string) => setSelectedItems(prev => prev.filter(item => item.id !== id));
  return <div style={{
    maxWidth: 400
  }}>
      <_MultiSelectV2 {...args} selectedItems={selectedItems} onAdd={onAdd} onRemove={onRemove} />
    </div>;
}`,...(B=(L=f.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var H,G,J;j.parameters={...j.parameters,docs:{...(H=j.parameters)==null?void 0:H.docs,source:{originalSource:`(): React.ReactElement => {
  const [values, setValues] = useState<Record<string, TMultiSelectOption[]>>({
    small: [],
    medium: [],
    large: []
  });
  return <div style={{
    maxWidth: 400,
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      {(['small', 'medium', 'large'] as const).map(size => <_MultiSelectV2 key={size} size={size} label={size} options={OPTIONS} placeholder="Search and select people" selectedItems={values[size]} onAdd={item => setValues(prev => ({
      ...prev,
      [size]: [...prev[size], item]
    }))} onRemove={id => setValues(prev => ({
      ...prev,
      [size]: prev[size].filter(i => i.id !== id)
    }))} />)}
    </div>;
}`,...(J=(G=j.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,Y,K;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`args => {
  const [selectedItems, setSelectedItems] = useState<TMultiSelectOption[]>(() => args.selectedItems ?? []);
  const onAdd = (item: TMultiSelectOption) => setSelectedItems(prev => [...prev, item]);
  const onRemove = (id: string) => setSelectedItems(prev => prev.filter(item => item.id !== id));
  return <div style={{
    maxWidth: 400
  }}>
      <_MultiSelectV2 {...args} selectedItems={selectedItems} onAdd={onAdd} onRemove={onRemove} />
    </div>;
}`,...(K=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};var U,X,Z;S.parameters={...S.parameters,docs:{...(U=S.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
  const [selectedItems, setSelectedItems] = useState<TMultiSelectOption[]>(() => args.selectedItems ?? []);
  const onAdd = (item: TMultiSelectOption) => setSelectedItems(prev => [...prev, item]);
  const onRemove = (id: string) => setSelectedItems(prev => prev.filter(item => item.id !== id));
  return <div style={{
    maxWidth: 400
  }}>
      <_MultiSelectV2 {...args} selectedItems={selectedItems} onAdd={onAdd} onRemove={onRemove} />
    </div>;
}`,...(Z=(X=S.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,se;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`args => {
  const [selectedItems, setSelectedItems] = useState<TMultiSelectOption[]>(() => args.selectedItems ?? []);
  const onAdd = (item: TMultiSelectOption) => setSelectedItems(prev => [...prev, item]);
  const onRemove = (id: string) => setSelectedItems(prev => prev.filter(item => item.id !== id));
  return <div style={{
    maxWidth: 400
  }}>
      <_MultiSelectV2 {...args} selectedItems={selectedItems} onAdd={onAdd} onRemove={onRemove} />
    </div>;
}`,...(se=(te=x.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ie,ae,re;M.parameters={...M.parameters,docs:{...(ie=M.parameters)==null?void 0:ie.docs,source:{originalSource:`(): React.ReactElement => {
  const onSubmit = (data: any) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };
  return <div style={{
    maxWidth: 400
  }}>
      <FormContainer onSubmit={onSubmit} validationScheme={VALIDATION_SCHEME} initialValues={{
      managers: []
    }} dataTestId="multi-select-v2-form">
        <>
          <FormField name="managers" As={props => <_MultiSelectV2 {...props} options={OPTIONS} placeholder="Search and select people" label={'label'} />} />
          <Button buttonActionType="submit" buttonText="Save" className="mt-16" />
        </>
      </FormContainer>
    </div>;
}`,...(re=(ae=M.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};const rt=["MultiSelectV2","Sizes","CustomDropdownWidth","RequiredWithError","Disabled","WithFormContainer"];export{b as CustomDropdownWidth,x as Disabled,f as MultiSelectV2,S as RequiredWithError,j as Sizes,M as WithFormContainer,rt as __namedExportsOrder,at as default};
