import{j as e}from"./jsx-runtime-96Wg0gMf.js";import{r as i}from"./iframe-Cvv3kum1.js";import{M as C,N as I}from"./NestedMenu-DB1Lbd1S.js";import{B as b}from"./Button-C7IuxvuL.js";import{I as y}from"./IconArrowDownloadFilled-Z0ugP-e-.js";import{I as g,a as h,b as x}from"./IconBeach-DMni74rC.js";import{I as M}from"./IconMore-DJWjNhs6.js";import{I as O}from"./IconCheckmark-Bymj29If.js";import{I as n}from"./IconSettings-B2PtBKsH.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-0c6HuLXZ.js";import"./index-B-9VYrzV.js";import"./Text-CG9W3FPS.js";import"./helpers-C6rmQpZ-.js";import"./index-DYDl_GcV.js";import"./types-DN5MOBJf.js";import"./Popover-CsfQpj4H.js";import"./IconDismiss-DM1fMKIB.js";import"./Link-BlhJREZr.js";import"./index-CoHx_nq2.js";import"./CollapseGroup-D6CUGlUY.js";import"./Divider-BYiMQqMi.js";import"./AnimatePresenceWrapper-BLyp51PF.js";import"./IconChevronDown-Cxqmn-dP.js";import"./IconChevronUp-DvkidGuV.js";import"./IconChevronRight-B4cLZiAI.js";import"./AvatarGroup-CuvgsPPV.js";import"./DropzoneFileUpload-BN74Pn14.js";import"./Label-CGl5Z4W3.js";import"./useFormProps-CRl2e3TN.js";import"./ErrorMessage-9gH2KQG7.js";import"./IconDynamicComponent-nkQdiggN.js";import"./Snackbar-Ds5u-p-H.js";import"./Alert-VBq_US_8.js";import"./IconDismissFilled-CFRHRUZY.js";import"./Progress-Dyr0llIn.js";import"./IconAdd-PgUYQDlU.js";import"./Checkbox-D6wQDm-O.js";import"./IconInfo-DprYm42v.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
