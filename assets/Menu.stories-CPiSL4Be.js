import{j as e}from"./jsx-runtime-B0b0QkDi.js";import{r as i}from"./iframe-BFHg0vP5.js";import{M as C,N as I}from"./NestedMenu-B_4F0Q00.js";import{B as b}from"./Button-1m6dLyK7.js";import{I as y}from"./IconArrowDownloadFilled-Ddo1ehkA.js";import{I as g,a as h,b as x}from"./IconBeach-BgQJoHRO.js";import{I as M}from"./IconMore-BYFYPCS8.js";import{I as O}from"./IconCheckmark-DxqbcmwY.js";import{I as n}from"./IconSettings-Z_D4rg-D.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-BvxIvH0c.js";import"./index-CwJlQUNM.js";import"./Text-Bo5RN8nY.js";import"./helpers-DSVtpnDC.js";import"./index-AboGxAif.js";import"./types-B59vX58w.js";import"./index-v3STkguG.js";import"./useOnOutsideClick-DtQuuATV.js";import"./CollapseGroup-DjXWV8Hs.js";import"./Divider-BpnkrB52.js";import"./AnimatePresenceWrapper-BTT2CzII.js";import"./IconChevronDown-C1u5HczF.js";import"./IconChevronUp-CvKX9FeM.js";import"./IconChevronRight-rlfHypmu.js";import"./AvatarGroup-BPzmkdqQ.js";import"./DropzoneFileUpload-BcOKGNr4.js";import"./Label-Do7OgWzo.js";import"./useFormProps-CQ-ti30j.js";import"./ErrorMessage-CK_thhKR.js";import"./IconDynamicComponent-D-EMrMHu.js";import"./Snackbar-BuacAPu9.js";import"./Alert-BcGPSb4e.js";import"./IconDismissFilled-MUjCXSwV.js";import"./Progress-BOtxgKRy.js";import"./IconAdd-9L8G7vSF.js";import"./Checkbox-CS4MHOgz.js";import"./Popover-BPB-rrlv.js";import"./IconDismiss-CWA1raQE.js";import"./Link-P5GzqX_I.js";import"./IconInfo-BJmG1AUd.js";const ve={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
