import{j as e}from"./jsx-runtime-C5SBGurE.js";import{r as i}from"./iframe-c-PHskCW.js";import{M as C,N as I}from"./NestedMenu-T-AY2EAi.js";import{B as b}from"./Button-4VAfJckQ.js";import{I as y}from"./IconArrowDownloadFilled-JO1SmYwB.js";import{I as g,a as h,b as x}from"./IconBeach-JNYGgkrm.js";import{I as M}from"./IconMore-Kj6yplM_.js";import{I as O}from"./IconCheckmark-D80lg2Z-.js";import{I as n}from"./IconSettings-BbqF3pm4.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-NkvAKDIl.js";import"./index-SAL3rGAq.js";import"./Text-DSN2Q_c0.js";import"./helpers-BDV50xAg.js";import"./index-AboGxAif.js";import"./types-VyDI_scB.js";import"./index-Dod7zPAY.js";import"./Popover-BRJBNGV2.js";import"./IconDismiss-3uX42Loi.js";import"./Link-BtJ-N-DY.js";import"./CollapseGroup-CjqdoZ8C.js";import"./Divider-a9orLmuL.js";import"./AnimatePresenceWrapper-DvsDj7I5.js";import"./IconChevronDown-NqsHfSgs.js";import"./IconChevronUp-CcJOZhNr.js";import"./IconChevronRight-CAmnRV3E.js";import"./AvatarGroup-CE9jOx-t.js";import"./DropzoneFileUpload-UgzLOEnw.js";import"./Label-C-p9oE_d.js";import"./useFormProps-8uxq7CRB.js";import"./ErrorMessage-DcZt2I4D.js";import"./IconDynamicComponent-C64Q3mSW.js";import"./Snackbar-D4DmePlY.js";import"./Alert-B8RJ_uYz.js";import"./IconDismissFilled-BZYbJOR1.js";import"./Progress-Co5x6wsn.js";import"./IconAdd-CjNSGPrE.js";import"./Checkbox-Dvil3clU.js";import"./IconInfo-DCuCMcrC.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ve=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,ve as __namedExportsOrder,fe as default};
