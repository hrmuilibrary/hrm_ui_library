import{j as e}from"./jsx-runtime-BQ8XKDWZ.js";import{r as i}from"./iframe-DuzJ3-xf.js";import{M as C,N as I}from"./NestedMenu-B3f0TTxp.js";import{B as b}from"./Button-DsWIgKwr.js";import{I as y}from"./IconArrowDownloadFilled-DU71WUq-.js";import{I as g,a as h,b as x}from"./IconBeach-CkI8RApA.js";import{I as M}from"./IconMore-DXKg6SNE.js";import{I as O}from"./IconCheckmark-CfdrAkp2.js";import{I as n}from"./IconSettings-DJREb1hs.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-Bp9DWzwB.js";import"./index-BXUB3CAz.js";import"./Text-pLVOucf6.js";import"./helpers-CH0y8nQM.js";import"./index-AboGxAif.js";import"./types-3LfPC6TZ.js";import"./index-BoNFqYXL.js";import"./useOnOutsideClick-DwyUj8qM.js";import"./CollapseGroup-DXk9mGz-.js";import"./Divider-BWERKW5b.js";import"./AnimatePresenceWrapper-BffjZJ1d.js";import"./IconChevronDown-DrlTxOME.js";import"./IconChevronUp-SqrhYKWN.js";import"./IconChevronRight-DYe2eMk9.js";import"./AvatarGroup-C8tvysow.js";import"./DropzoneFileUpload-BlC4d78K.js";import"./Label-DQSMISYM.js";import"./useFormProps-DIvwJoaV.js";import"./ErrorMessage-C5HC5Vf_.js";import"./IconDynamicComponent-Dk4FBIIr.js";import"./Snackbar-CkI-3z82.js";import"./Alert-By5cvU4a.js";import"./IconDismissFilled-Mm6VXrZ1.js";import"./Progress-_ekFhkAr.js";import"./IconAdd-CoH_JCxp.js";import"./Checkbox-DtqaWqoG.js";import"./Popover-CQTjngkz.js";import"./IconDismiss-Ceoj2xTf.js";import"./Link-CxigbnfV.js";import"./IconInfo-BaYuM2sj.js";const ve={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconMore
      }} />
        <_Menu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={items} isOpen={open} />
      </div>
    </div>;
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,f,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`(args: any) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div style={{
    display: 'flex',
    justifyContent: 'flex-end'
  }}>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconSettings
      }} type="tertiary" />
        <_NestedMenu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={NestedItems} isOpen={open} position="bottom-left" />
      </div>
    </div>;
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Ce=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,Ce as __namedExportsOrder,ve as default};
