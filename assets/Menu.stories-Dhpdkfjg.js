import{j as e}from"./jsx-runtime-CN6_6-6N.js";import{r as i}from"./iframe-DbjsUUQU.js";import{M as C,N as I}from"./NestedMenu-B4KqUO94.js";import{B as b}from"./Button-QbkZtnJI.js";import{I as y}from"./IconArrowDownloadFilled-Cichekaf.js";import{I as g,a as h,b as x}from"./IconBeach-DFyJHp7F.js";import{I as M}from"./IconMore-DA-FCc7O.js";import{I as O}from"./IconCheckmark-BkmyAcmI.js";import{I as n}from"./IconSettings-Bv7Jg-qf.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-Dkt5n4kY.js";import"./index-zdBYGFOe.js";import"./Text-BIXK0QDe.js";import"./helpers-BKxq4dXH.js";import"./index-AboGxAif.js";import"./types-CvA1PegO.js";import"./index-CGhebkye.js";import"./Popover-v6xI9ikw.js";import"./IconDismiss-DWxsXlcC.js";import"./Link-BZZs5ZJc.js";import"./CollapseGroup-DCQ-Leaj.js";import"./Divider-CUS6WAbn.js";import"./AnimatePresenceWrapper-2rbL5lXN.js";import"./IconChevronDown-U3Azh4WM.js";import"./IconChevronUp-Ct2XQtxK.js";import"./IconChevronRight-BjH07ibp.js";import"./AvatarGroup-Ubw3f-9I.js";import"./DropzoneFileUpload-Co7vclH7.js";import"./Label-D6HAESUM.js";import"./useFormProps-CZw5LYIO.js";import"./ErrorMessage-C75CXQJ8.js";import"./IconDynamicComponent-C7zLHmRR.js";import"./Snackbar-D_dNwpbf.js";import"./Alert-50hPxIAf.js";import"./IconDismissFilled-B1vkE9iq.js";import"./Progress-BmePOall.js";import"./IconAdd-Ci5Juxm5.js";import"./Checkbox-CXYVjl-J.js";import"./IconInfo-DB4RwRhr.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
